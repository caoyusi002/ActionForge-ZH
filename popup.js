const toggle = document.querySelector('#enabled');
const status = document.querySelector('#status');

async function load() {
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  toggle.checked = enabled;
  toggle.disabled = false;
}

load().catch(() => {
  status.textContent = '无法读取当前语言设置。';
});

toggle.addEventListener('change', async () => {
  const enabled = toggle.checked;
  toggle.disabled = true;
  try {
    await chrome.storage.local.set({ enabled });
    status.textContent = enabled ? '已启用简体中文。' : '已恢复英文界面。';
  } catch {
    toggle.checked = !enabled;
    status.textContent = '语言设置保存失败，请重试。';
  } finally {
    toggle.disabled = false;
  }
});
