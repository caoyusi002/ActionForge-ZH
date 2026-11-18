(() => {
  'use strict';

  const { translate, clipName, clipTitle } = globalThis.actionForgeZh;
  const attrNames = ['title', 'aria-label', 'placeholder', 'alt'];
  const ignored = 'script, style, template, noscript, code, pre, kbd, svg, [contenteditable]:not([contenteditable="false"]), textarea';
  const assetNames = '.lib-tile__name, .lib-tile__by, .lib-pose__name, .lib-tile__label';
  const captionAttribute = 'data-af-zh-caption';
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const pending = new Set();
  const motionPath = /^\/motion-lab(?:\.html)?\/?$/.test(location.pathname);
  const editor = location.pathname === '/' || location.pathname === '/index.html' || motionPath;
  const pageChrome = 'header, nav, footer, .af-top, .af-bar';
  let enabled = false;
  let scheduled = false;

  function isBuiltInClip(element) {
    const tile = element.closest('#lib-grid .lib-tile');
    return tile && !tile.matches('.lib-chartile') &&
      document.querySelector('#lib-view-yours')?.getAttribute('aria-pressed') !== 'true';
  }

  function translatedText(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest(ignored) || parent.closest(assetNames)) return undefined;
    if (!editor && !parent.closest(pageChrome)) return undefined;
    if (parent.tagName === 'OPTION' && !parent.hasAttribute('value')) return undefined;
    const original = node.data;
    if (!/[a-z]/i.test(original)) return undefined;
    const replacement = translate(original);
    // Preserve whitespace between inline controls.
    return replacement ? original.replace(/\S(?:[\s\S]*\S)?/, replacement) : undefined;
  }

  function visitText(node) {
    const previous = originalText.get(node);
    if (previous?.translated === node.data) {
      if (!enabled) {
        node.data = previous.original;
        originalText.delete(node);
      }
      return;
    }

    originalText.delete(node);
    if (!enabled) return;
    const translated = translatedText(node);
    if (translated && translated !== node.data) {
      originalText.set(node, { original: node.data, translated });
      node.data = translated;
    }
  }

  function visitElement(element) {
    if (element.closest(ignored)) return;
    const previous = originalAttributes.get(element) ?? new Map();

    if (enabled && element.matches('.lib-tile__name') && isBuiltInClip(element)) {
      const caption = clipName(element.textContent);
      if (caption) element.setAttribute(captionAttribute, caption);
      else element.removeAttribute(captionAttribute);
    } else if (element.hasAttribute(captionAttribute)) {
      element.removeAttribute(captionAttribute);
    }

    for (const attr of attrNames) {
      const value = element.getAttribute(attr);
      const old = previous.get(attr);
      if (old && old.translated === value) {
        if (!enabled) {
          element.setAttribute(attr, old.original);
          previous.delete(attr);
        }
        continue;
      }

      previous.delete(attr);
      if (!enabled || !value || !/[a-z]/i.test(value)) continue;
      const tile = element.matches('.lib-tile') && element.closest('#lib-grid');
      const translated = attr === 'title' && tile
        ? (isBuiltInClip(element) ? clipTitle(value) : undefined)
        : translate(value);
      if (translated && translated !== value) {
        previous.set(attr, { original: value, translated });
        element.setAttribute(attr, translated);
      }
    }

    if (previous.size) originalAttributes.set(element, previous);
    else originalAttributes.delete(element);
  }

  function visit(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      visitText(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    if (root.closest(ignored)) return;
    if (!editor && !root.closest(pageChrome)) {
      for (const shell of root.querySelectorAll(pageChrome)) {
        if (!shell.parentElement?.closest(pageChrome)) visit(shell);
      }
      return;
    }
    visitElement(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.nodeType === Node.ELEMENT_NODE && node.matches(ignored)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeType === Node.TEXT_NODE) visitText(node);
      else visitElement(node);
    }
  }

  const observer = new MutationObserver(changes => {
    for (const change of changes) {
      if (change.type === 'childList') {
        for (const node of change.addedNodes) pending.add(node);
      } else if (change.type === 'characterData' && change.target.parentElement?.matches('.lib-tile__name')) {
        pending.add(change.target.parentElement);
      } else if (change.attributeName === 'aria-pressed') {
        if (change.target.id === 'lib-view-yours') {
          const grid = document.querySelector('#lib-grid');
          if (grid) pending.add(grid);
        }
      } else {
        pending.add(change.target);
      }
    }
    if (!pending.size || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const work = new Set(pending);
      pending.clear();
      for (const node of work) {
        if (!node.isConnected) continue;
        let ancestor = node.parentElement;
        while (ancestor && !work.has(ancestor)) ancestor = ancestor.parentElement;
        if (!ancestor) visit(node);
      }
    });
  });

  function refresh() {
    observer.disconnect();
    pending.clear();
    if (!document.body) return;
    const title = document.head.querySelector('title');
    if (editor && title) visit(title);
    visit(document.body);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributeFilter: [...attrNames, 'aria-pressed'],
    });
  }

  chrome.storage.local.get({ enabled: true }).then(settings => {
    enabled = settings.enabled;
    refresh();
  });
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.enabled) {
      enabled = changes.enabled.newValue ?? true;
      refresh();
    }
  });
})();
