(() => {
  'use strict';

  const normalize = text => text.trim().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ');
  const makeDictionary = rows => new Map(rows.trim().split('\n').map(row => {
    const [source, translation] = row.split('\t');
    return [normalize(source), translation];
  }));

  const labels = makeDictionary(`
ActionForge – Mixamo Alternative | Character Animation in Your Browser	ActionForge | 浏览器角色动画编辑器
Beta	测试版
Motion Lab	动作实验室
New	新
Community	社区
Adjust, pose and export character animation in the browser	在浏览器中调整、摆姿和导出角色动画
Animations CC0	动画采用 CC0
Code © CGstuff	代码 © CGstuff
Licences	许可证
Privacy	隐私政策
Desktop app	桌面版
Support	支持
Docs	使用文档
FAQ	常见问题
What’s new	更新日志
Preferences	偏好设置
New animation	新建动画
Import animation	导入动画
Setup	设置
Animate	动画编辑
Animate workspace	动画工作区
Browse	浏览
Workspaces	工作区
Scene	场景
Window ▾	面板 ▾
Download ▾	导出 ▾
Outliner	骨骼树
IK controls	IK 控制器
Poles	极向控制
Fingers	手指
off	关
on	开
Character	角色
Stage	舞台
Import	导入
Projects	项目
Picker	关节选取
Mask	遮罩
Animations	动画
Sort: Newest	排序：最新
Sort: Name	排序：名称
Sort: Needs rigging first	排序：待绑定优先
Sort: Tag	排序：标签
Tags	标签
Edit tags	编辑标签
Characters	角色
Mannequin	默认人偶
My characters	我的角色
Rigged character	已绑定角色
keeps its skeleton	保留原骨架
Unrigged model	未绑定模型
rigged here	在此绑定
worn	正在使用
Wear	使用角色
⚙ Rig it	⚙ 绑定骨架
✎ Rename	✎ 重命名
Materials	材质
↓ Save a copy	↓ 保存副本
✕ Delete	✕ 删除
Your characters are read and kept in this browser only — never uploaded.	你导入的角色保存在当前浏览器本地。
Make a character on our skeleton	使用内置骨架创建角色
Download the skeleton template (below) and open it in Blender 4.2 or newer.	下载下方的骨架模板，在 Blender 4.2 或更新版本中打开。
Model around the mannequin, or bring your character in and fit the skeleton to it: in Edit Mode (X-Axis Mirror on) move the joints to your character’s knees, elbows, hips. A T-pose, an A-pose or a relaxed rest all work; don’t rename bones.	你可以在人偶基础上建模，也可以导入自己的角色。在编辑模式下启用 X 轴镜像，将关节移到角色的膝盖、手肘和髋部。T 姿势、A 姿势和自然静止姿势均可，骨骼名称请保持原样。
Select your mesh, then the armature, and Parent → With Automatic Weights. The helper bones are set not to deform, so they’re skipped.	先选网格，再选骨架，设置父级并选择「自动权重」。辅助骨骼已关闭变形，计算权重时会跳过。
Export: File → Export → glTF 2.0 (.glb), Include → Selected Objects, no compression.	在 Blender 中选择「文件 → 导出 → glTF 2.0 (.glb)」，勾选「选中的对象」并关闭压缩。
Add the .glb here — or drop it on the stage. It says “fits our skeleton exactly” or “with its own proportions”, and the clips play on it.	在此添加 .glb，或直接把它拖到舞台中。页面会提示骨架是否完全匹配，或是否保留角色自身比例。
Skeleton template (.blend)	骨架模板 (.blend)
Skeleton (.glb)	骨架 (.glb)
Camera	相机
Set camera	设置相机
Shot	相机视图
Keep this camera with this animation	为此动画单独保存相机
Only your own animations (My animations) can keep a camera of their own.	只有「我的动画」里的动作可以单独保存相机。
Lock view to camera	锁定视图到相机
Show the camera in the scene	在场景中显示相机
Show the shot window	显示相机预览
No camera is set yet.	尚未设置相机。
Playblast	预览视频
Frames	帧
Play range	播放范围
Whole animation	整个动画
Scene pieces	场景物件
Frame number	帧号
Its size is the camera's Resolution, under Picture. No sound.	视频尺寸取自「画面」中的相机分辨率，导出无声视频。
Position	位置
Stands at, m	相机位置（米）
Looks at, m	注视点（米）
Lens	镜头
Type	类型
Perspective	透视
Ortho	正交
Focal length	焦距
Field of view °	视场角 °
Sensor mm	传感器宽度（毫米）
Ortho scale m	正交范围（米）
Picture	画面
Shape	形状
Custom	自定义
Resolution px	分辨率（像素）
Dim outside	压暗画框外
Clip, shift, roll	裁剪、偏移与滚转
Clip start, end	近、远裁剪面
Shift X, Y	X / Y 偏移
Roll °	滚转 °
Guides	构图参考线
Lines over the frame in Shot, to compose by. They are not in the picture.	相机视图中的构图参考线仅供预览。
Thirds	三分线
Centre	中心线
Diagonals	对角线
Safe areas	安全框
Staging	布景
Waist-high wall	齐腰矮墙
Table and chair	桌椅
Scenery	场景模型
House	房屋
Tree	树
City block	城市街区
Village street	村庄街道
Forest clearing	林间空地
Mountain	山体
Map	俯视地图
Edit	编辑
Pieces at real sizes to animate against. For reference only: not in the animation, a picture or a download.	布景按实际尺寸放置，仅供制作动画时参考。
Click a picture to put its piece in front of the character, or drag it into the view.	点击缩略图把物件放在角色前方，也可以拖入视图。
+ Add animation	+ 添加动画
Motion	位移
Root travels	位移由根骨骼驱动
Hips carry it	位移保留在髋部
Next import: its ground movement goes to the root — for walks, runs and turns.	下次导入时，把沿地面的位移转到根骨骼。适合走、跑和转身。
Drop an FBX or GLB here	将 FBX 或 GLB 拖到这里
Backup	备份
Save…	保存…
Restore…	恢复…
This browser has NOT promised to keep these — they can be cleared under disk pressure, and Safari deletes them after seven days away. Use Save to keep a copy.	浏览器可能在磁盘空间不足时清理这些数据，Safari 也可能在七天未使用后清理。请用「保存」保留一份备份。
What you bring in, and every animation you keep here, is listed in the library, in My animations.	你导入和保存的动画都在素材库的「我的动画」里。
Untitled scene	未命名场景
not saved yet — Save As… (Shift+Ctrl+S) keeps it as a file	尚未保存。使用「另存为…」(Shift+Ctrl+S) 保存文件。
Open…	打开…
Save	保存
Save As…	另存为…
Save with your character	随项目保存角色
The files you save or open are listed here, newest first.	这里显示最近打开或保存的文件。
Click a spot to pick that joint. Shift adds one. A drag picks all it goes over: with Shift it adds them, with Ctrl it takes them out. Turn what is picked with its rings in the view, or R.	点击选择关节。按 Shift 可加选。拖动框选时，Shift 加选，Ctrl 减选。拖动视图里的旋转环或按 R 可旋转所选关节。
Body	身体
Hand	手
Left	左
Right	右
+ Add selected	+ 添加所选
Drag clips from the library onto the Strips — or tick them and + Add selected. Then pick a track there: which body parts it plays is set here.	可从素材库拖入动画条，也可勾选动作并点击「添加所选」。选中轨道后，在这里配置该轨道驱动的身体部位。
New set	新建动画集
Name	名称
Description	说明
Delete set	删除动画集
Play an animation, then + Add this animation for each one the download is to write.	先播放一个动作，再点「添加当前动画」把它加入导出集。
+ Add this animation	+ 添加当前动画
Export name	导出名称
— the animation shown	— 当前显示的动画
Empty: the name as now. For the file only — the animation keeps its name here.	留空则使用当前名称。此名称应用于导出的文件。
Global	全局
Local	局部
View	视图
Parent	父级
Pivot	枢轴
Bounding Box Center	包围盒中心
3D Cursor	3D 游标
3D cursor	3D 游标
Individual Origins	各自原点
Median Point	中点
Active Element	活动元素
Only Locations	仅位置
Cursor to Selected	游标移到选区
Cursor to Active	游标移到活动元素
Cursor to World Origin	游标移到世界原点
Shift+right-click puts the 3D cursor on him under the pointer; Shift+right-drag drags it.	Shift+右键将 3D 游标放到指针下的角色表面。Shift+右键拖动可移动游标。
Snap turns in steps of	旋转吸附步长
Hold Ctrl during a drag to flip it.	拖动时按住 Ctrl 可临时反转吸附状态。
Pick ▾	选择 ▾
Show ▾	显示 ▾
Look ▾	外观 ▾
Look	外观
Reset	重置
▾ Drawn as	▾ 显示方式
Colours	颜色
Own	原色
One	单色
Random	随机
Turn	旋转
Bands	色阶
Shadow	阴影
His own colours under an even light, no shading — as a 2D artist reads them.	在均匀光照下显示角色原色，便于辨认颜色。
▾ Lines	▾ 描边
Ink outline	描边
Width	宽度
▾ Light	▾ 光照
From	光源方向
Fixed in the world	固定在世界坐标
Strength	强度
Fill	补光
Rim	轮廓光
Off	关
Soft	柔和
Strong	强
Warm light, cool shade	暖光、冷阴影
▾ Shadows	▾ 阴影
Shadows	阴影
Softness	柔和度
In the view	视图内
Normal	普通
Fine	精细
▾ Background	▾ 背景
Ground	地面
Dark	深色
Paper	纸色
Grid	网格
Fog	雾
Floor	地板
Cubes	方块
▾ Picture	▾ 画面
Exposure	曝光
Play ▾	播放 ▾
Origin	原点
Camera ▾	相机 ▾
The shot	相机画面
drag to orbit · scroll to zoom · space to play/pause	拖动旋转视角 · 滚动缩放 · 空格播放或暂停
rig by	绑定作者
animation by	动画作者
Loading library…	正在加载素材库…
Loading…	正在加载…
Loading ActionForge…	正在加载 ActionForge…
SEC	秒
Library	素材库
Transform	变换
Nothing selected: pick a control in the view or the outliner.	未选中。请在视图或骨骼树里选择控制器。
Rig	骨架控制
Adjust	动作调整
Show	显示
Torso	躯干
(Hips)	（髋部）
(Spine and head)	（脊柱和头部）
Fingers.L	左手手指
Fingers.R	右手手指
Arm.L (IK)	左臂（IK）
Arm.R (IK)	右臂（IK）
Leg.L (IK)	左腿（IK）
Leg.R (IK)	右腿（IK）
(FK)	（FK）
(Pole)	（极向）
(Shoulder)	（肩部）
Root	根骨骼
More	更多
Debug	调试
Reset all	全部重置
Props	道具
R hand prop	右手道具
Pos cm	位置（厘米）
Rot °	旋转 °
R arm follows this prop	右臂跟随该道具
L hand prop	左手道具
L arm follows this prop	左臂跟随该道具
Moves the bone the prop hangs from, so it applies to anything that hand holds. While it is on, the clip stops driving that bone.	此操作移动承载道具的骨骼，因此适用于该手拿的任何道具。启用时，当前动画不再驱动此骨骼。
Reach	伸展
Arms ↕	手臂 ↕
Arms ↔	手臂 ↔
Posture	体态
Chest ↔	胸部 ↔
Chest ↕	胸部 ↕
Head ↕	头部 ↕
Head ↔	头部 ↔
Speed	速度
Leg offsets move where the feet land, but the clip still travels its original distance — expect foot slide.	腿部偏移会改变落脚点。原动画位移不变，脚可能滑动。
Layers	动画层
+ Layer	+ 添加动画层
Base	基础层
The animation · locked	源动画 · 已锁定
Keys go into Base. + Layer puts a layer above it.	关键帧默认写入基础层。点击「添加动画层」可叠加新层。
Weight	权重
Poses	姿势
My animations	我的动画
Tags ▾	标签 ▾
No tags authored yet.	尚未创建标签。
Group by category	按类别分组
Thumbnails	缩略图
List	列表
Length	时长
Made by	作者
No animations in the library yet.	素材库中暂无动画。
locomotion	移动
interaction	交互
combat	战斗
aim	瞄准
gestures	手势
reactions	受击与反应
zombie	僵尸动作
fps	第一人称
Both	两侧
Only the picked parts	仅所选部位
Save this pose	保存此姿势
Save this hand	保存手势
With this view	包含当前视角
Fist	握拳
open palm	张开手掌
open palm natural	自然张开手掌
Animals	动物
Empty hands	空手
Drop a .glb here to add a prop. It is kept in this browser — nothing is uploaded.	将 .glb 文件拖到这里添加道具。文件保存在当前浏览器本地。
Clear	清除
Make my copy	创建我的副本
Relative	相对
Over time	逐帧复制
Paste to	粘贴到
As copied	按原帧位置
The picked keys	所选关键帧
Every frame between them	所选关键帧之间的每一帧
The range	范围内
From – to	起始 – 结束
to	至
Paste	粘贴
Location	位置
Rotation	旋转
Playback	播放
Loop	循环
Follow the current frame	跟随当前帧
Keying	关键帧
Strips	动画条
Graph	曲线
Keys	关键帧
Fit	适应视图
Range	范围
Auto	自动
Manual	手动
drop a clip to start	拖入动作以开始
Drag a clip here from the grid to start	从素材库拖入动作以开始
Curves	曲线
All	全部
Channel	通道
Key	关键帧
Frame	帧
Value	数值
Handles	曲线手柄
Free	自由
Vector	向量
Aligned	对齐
Clamped	钳制
To the next	到下一关键帧
Bezier	贝塞尔
Linear	线性
Step	阶梯
2D Cursor	2D 游标
Individual Centers	各自中心
Smooth ▾	平滑 ▾
Falloff	衰减
Smooth	平滑
Sphere	球形
Inverse Square	平方反比
Sharp	尖锐
Constant	恒定
Radius	半径
frames	帧
While a move, turn or scale runs: the wheel, or Page Up and Page Down (Shift: finer).	移动、旋转或缩放时，可用滚轮或 Page Up / Page Down 调整。按住 Shift 可微调。
Cursor	游标
Right-click: the menu · G move · R rotate · S scale · Shift+D duplicate · Shift+right-click the 2D cursor · middle-drag moves the view · wheel zooms	右键打开菜单 · G 移动 · R 旋转 · S 缩放 · Shift+D 复制 · Shift+右键放置 2D 游标 · 中键平移 · 滚轮缩放
Normalize	归一化
Fit keys	适配关键帧
Time pins	时间标记
Timeline	时间轴
Swap Outliner and Library	交换骨骼树与素材库
Show all	全部显示
Reset Animate	重置动画工作区
Rename	重命名
Delete	删除
Current clip	当前动画
Nothing selected	未选择动画
Include character mesh	包含角色网格
In place	原地
In Place	原地
Only the range	仅导出选定范围
One file per clip (.zip)	每个动作一个文件（.zip）
Format	格式
Units	单位
Skeleton	骨架
Default	默认
↓ Download	↓ 导出
↓ Download bundle	↓ 导出所选动画
Download set as one file	将动画集导出为单个文件
Save to my animations	保存到我的动画
↓ Character only (rest pose)	↓ 仅导出角色（静止姿势）
Pose	摆姿
Click a joint in the viewport, then turn, move or size it with the gizmo — Shift+click adds joints, + Children the ones below. Letting go keys them on this frame.	在视图中点击关节，再用操控器旋转、移动或缩放。按 Shift 可加选，「子级」可选中下级关节。松开时在当前帧记录关键帧。
Gizmo	操控器
Move	移动
Rotate	旋转
Scale	缩放
Axes	坐标轴
X-mirror	X 轴镜像
Snap	吸附
⇄ Other side	⇄ 对侧
▭ Box (B)	▭ 框选 (B)
Bones	骨骼
Spine and head	脊柱和头部
Left arm	左臂
Right arm	右臂
Left hand	左手
Right hand	右手
Left leg	左腿
Right leg	右腿
Other	其他
Copy pose	复制姿势
Paste pose	粘贴姿势
Paste flipped	镜像粘贴
Mirror L→R	左侧镜像到右侧
Mirror R→L	右侧镜像到左侧
Animation	动画
Snap switches at once	立即切换
The IK | FK snap also keys the frame before, so the switch is instant. Off: the switch blends from its last key, as in Auto-Rig Pro.	打开后，IK / FK 切换会在前一帧额外打关键帧，从而立即切换。关闭时从上一个关键帧开始混合过渡。
Workflow	工作模式
How an arm or a leg is worked: Simple, IK turned on per limb when you want it; Complex, both always on and blended. A scene plays the same either way.	简单模式可按肢体启用 IK。高级模式同时使用 IK 和 FK 并可调节混合。两种模式下场景播放效果相同。
Simple	简单
Complex	高级
Show both IK and FK while blending	混合时同时显示 IK 和 FK 控制器
A limb’s FK and IK controls both always drawn, whatever the IK / FK slider says — the side not driving fainter. Off: the side not driving is hidden, as in Auto-Rig Pro.	开启时同时显示两套控制器，当前未主导的控制器会淡化。关闭时隐藏未主导的控制器。
For the Complex workflow only.	仅在高级模式下生效。
FK shapes	FK 控制器形状
How the FK controls are drawn, in either workflow. The IK controls look the same either way.	设置 FK 控制器的显示形状。两种工作模式都可用。
Only the selected limb	仅显示选中肢体
Rig shows IK | FK, IK / FK and the pole for the limb of the control picked — its IK, its pole, an FK ring or its shoulder — as in Auto-Rig Pro. Off: every arm and leg.	开启时仅显示选中肢体的 IK / FK 切换、混合及极向控制。关闭时显示所有手臂和腿部。
Navigation	视图操作
How the 3D view is moved. Trackpad: two fingers turn it, Shift and two fingers move it, a pinch zooms; dragging works as with Mouse, and a mouse wheel turns the view too.	设置 3D 视图的操作方式。使用触控板时，双指旋转视角，Shift+双指平移，双指捏合缩放。拖动操作和鼠标模式相同。
Mouse	鼠标
Trackpad	触控板
Kept in this browser, for every page.	此设置保存在当前浏览器中，对各页面生效。
Storage	存储
Library folder	素材库文件夹
None chosen	尚未选择
Choose a folder…	选择文件夹…
Keep your work in a folder on this computer, so that clearing the browser does not lose it. If the browser is ever cleared, choose the same folder again and it is all back.	将作品保存在电脑的文件夹中。清理浏览器数据后，重新选择同一个文件夹即可恢复。
Offline	离线
Being kept on this computer…	正在缓存到本机…
Remove the offline copy	删除离线副本
Layout	布局
Setup's column	设置栏位置
Which side of the window the column with Setup sits on — with the Outliner, or the Library when they are swapped (Window ▾).	设置「设置」栏在窗口的哪一侧。可在「面板」菜单中交换骨骼树与素材库的位置。
Play	播放
Pause	暂停
Scrub	拖动播放头
Undo	撤销
Redo	重做
Share	分享
Playback speed	播放速度
Auto-key	自动打关键帧
Wireframe	线框
Shading	着色
Colour	彩色
Grey	灰模
Rig controls	骨架控制器
Mirror	镜像
Reverse	倒放
Onion skin	洋葱皮
Onion skin settings	洋葱皮设置
Follow	跟随
Reframe	重新取景
Quad view	四视图
Trails	运动轨迹
Camera or scene	相机或场景
The left column	左侧栏
The right column	右侧栏
Setup's tools	设置工具
Animate's tools	动画工具
Which animations	选择动画来源
Search name or tag…	搜索英文动作名或标签…
Search the characters by name	按名称搜索角色
Search by name	按名称搜索
`);

  const tooltips = makeDictionary(`
Reshape one animation in depth: its curves, its controls, a style — and its eight directions. What you save there is here in My animations.	深入调整单个动画的曲线、控制器和风格，并生成八方向动作。结果可保存到「我的动画」。
The Community: see what others made, share your animations and poses, and get feedback on your work	浏览其他用户的作品，分享动画和姿势并交流反馈。
Desktop app: ActionForge for Windows and Linux, a window of its own that works with no connection	下载适用于 Windows 和 Linux 的 ActionForge 桌面版，可离线运行。
Support ActionForge	支持 ActionForge
The docs: every part of this page, numbered and named	查看此页面各区域的使用说明。
Frequently asked questions	常见问题
What’s new on ActionForge	ActionForge 更新日志
Preferences: how you like to work, kept in this browser for every page	调整操作偏好，设置保存在当前浏览器中。
New animation: Start one of your own animations from nothing: a pose held for as long as you choose, its keys in Base	新建动画。选择初始姿势和时长，关键帧将保存在基础层。
The Animate workspace: one animation's keys, its rig, its layers	动画工作区可编辑关键帧、骨架和动画层。
Window — show or hide the page's panels: a tick shows one, no tick hides it, kept so in this browser	勾选以显示面板，取消勾选以隐藏。设置保存在当前浏览器中。
Download — the animations ticked in the library, or the one on stage; or keep it in My animations	导出素材库中勾选的动作或当前动作，也可以保存到「我的动画」。
Drag to make this column wider or narrower · double-click for its usual width	拖动调整栏宽，双击恢复默认宽度。
The rig as its tree: a bone's row picks it, the IK controls under their bones	点击骨骼树中的一行选中骨骼，对应的 IK 控制器列在骨骼下方。
Character, Stage, Import, Projects, Picker, Mask	角色、舞台、导入、项目、关节选取、遮罩
Character — which body the clips play on, yours included, and rigging it	选择动画播放所用的角色，也可以导入自定义角色并绑定骨架。
Stage — a camera for the scene: look at your work from the angle it is meant to be seen from	设置场景相机和观看视角。
Import — bring in an FBX or GLB. Read on this machine, never uploaded	导入 FBX 或 GLB 文件，文件在本机读取。
Projects — save, open and download scenes (Ctrl+S)	保存、打开和导出场景（Ctrl+S）。
Picker — pick joints on a picture of the body, or of a hand	从身体或手部示意图上选取关节。
Mask — which body parts the track picked in the Strips plays	设置选中轨道驱动的身体部位。
Animations — your set: the animations the download writes together, each with the name its take gets	管理导出动画集及每个动作的导出名称。
A camera for the scene: look at your work from the angle it is meant to be seen from	为场景设置相机，从指定角度查看动画。
Bones: show the bones	显示骨骼
Colour: the character in its own colours	显示角色原色
Grey: one plain grey — the forms, without colour	用统一灰色查看形体
Rig controls: The rig's controls on the body: a ring on each bone, a box on each IK hand and foot that is on, a diamond on each pole — what a click picks. Off: nothing on the body is clicked (the Outliner still picks).	显示可选的骨骼旋转环、手脚 IK 方框和极向控制器。关闭后可继续在骨骼树中选择。
Mirror: swap left and right	左右镜像
Reverse: play it backwards — the keys flipped, the root with them	倒放动画，同时反转关键帧和根骨骼运动。
Start the reversed clip on the origin, where the clip itself started — off, it starts where the clip ended (a true reverse)	让倒放从原动画起点位置开始。关闭后，倒放会从原动画的结束位置开始。
In Place: preview with root motion locked	原地预览，锁定根骨骼运动。
Lock sideways travel	锁定横向位移
Lock height — off keeps a jump's rise	锁定高度。关闭可保留跳跃的垂直位移。
Lock forward travel	锁定前后位移
Lock turning: an animation that ends up turned faces one way throughout	锁定转向，使角色全程朝向同一方向。
Onion skin: ghosts of the frames before and after this one	以半透明残影显示当前帧前后的姿势。
Follow: the camera follows the character as it travels	相机跟随角色移动。
Reframe: put the character back in view	将角色重新移回视野。
Quad view (Ctrl+Alt+Q): the view in four, as Blender's — top, front and right, flat, and yours	切换四视图（Ctrl+Alt+Q），显示顶视、前视、右视和当前视图。
Switch between seconds and frames	在秒和帧之间切换。
Strips: arrange on a timeline	在时间轴上编排动画条。
Undo (Ctrl+Z)	撤销（Ctrl+Z）
Redo (Ctrl+Shift+Z)	重做（Ctrl+Shift+Z）
Clear: every key and edit on this animation taken off — you are asked first, and Ctrl+Z brings them back	清除该动画上的关键帧和编辑。确认后执行，可用 Ctrl+Z 撤销。
Make my copy: your own copy of this animation, with what is on it, kept in My animations and opened to edit — the library clip stays as it ships	将当前动画和编辑内容另存到「我的动画」，打开副本继续编辑。
Share: copy a short link to exactly this	复制当前场景的分享短链接。
Transform, then Rig, Adjust, and Layers	变换、骨架控制、动作调整和动画层
The library: Animations, Poses, Characters, Props	素材库包含动画、姿势、角色和道具。
What is selected: its numbers on this frame, and a diamond to key each	显示所选部件当前帧的变换值。点击菱形记录关键帧。
Drag to make Transform taller or shorter · double-click for its usual height	拖动调整变换面板高度，双击恢复默认值。
Rig — which controls are drawn, and each arm and leg IK or FK and what it follows	设置骨架控制器的显示、各肢体的 IK / FK 及跟随对象。
Adjust — reshape the clip with named sliders	使用滑块调整当前动作。
What the IK tool had that has no place of its own yet: Debug, Reset all, the held props, Reach.	展开调试、全部重置、手持道具和伸展工具。
Drag to make Layers taller or shorter · double-click for its usual height	拖动调整动画层面板高度，双击恢复默认值。
Props: something to hold in either hand	设置左右手可持有的道具。
The library's own animations, as they ship	浏览内置动画素材。
Your own animations: imported, made here, kept from the Motion Lab and the Weapon Lab — each with ✎ to rename and ✕ to delete	查看已导入或创建的动画。✎ 重命名，✕ 删除。
The tags: click one to show only the animations with it. Your own tags, Edit tags and Group by category are here too	点击标签筛选动画，也可以管理自定义标签或按类别分组。
Set Start and End under the timeline first	请先在时间轴下方设置起始帧和结束帧。
Select two or more clips to get one file per clip	选中至少两个动作后，可为每个动作生成一个文件。
Keep what is on screen with your animations, under a name	为当前动画命名并保存到「我的动画」。
Pivot Point — what R and S turn and size about	设置旋转（R）和缩放（S）的基准点。
Select all	全选
Deselect all	取消全选
Play / pause (Space)	播放或暂停（空格）
Graph Editor	曲线编辑器
The whole body	选择整个身体
The left hand	选择左手
The right hand	选择右手
A hand: the palm, and each joint of each finger	选择手掌及手指的各个关节。
As a camera sees: nearer things are bigger	透视投影，近大远小。
No perspective: the same size near and far, as in a plan or an elevation	正交投影，物体大小不随距离变化。
The shape of the picture	相机画面的宽高比例。
Pixels across	横向像素
Pixels down	纵向像素
Focal length, millimetres	焦距（毫米）
Clip start, metres	近裁剪面（米）
Clip end, metres	远裁剪面（米）
Roll, degrees	滚转角度
Across	横向
Up	向上
Toward you	朝向你
Square	正方形
Bring in an animation (FBX or GLB) on our own skeleton, Mixamo, Unreal (UE4 / UE5) or Reallusion (CC / ActorCore). Read and kept on this machine — nothing is uploaded, and only the animation is stored, never the character	从 FBX 或 GLB 导入动画，可用内置、Mixamo、Unreal（UE4 / UE5）或 Reallusion（CC / ActorCore）骨架。只在本机保存动画。
Walks, runs, turns — the ground movement goes to the root bone, so In place and root motion work	走、跑和转身时，将地面位移转给根骨骼，以支持原地播放和根运动。
Jumps, flips, anything that leaves the floor — all of the movement stays on the hips	跳跃和翻滚等离地动作的位移保留在髋部。
Write every one of your animations to a file you keep	将你的全部动画保存为备份文件。
Read a file written by Save — merged with what is here, never replacing it	导入备份文件，并合并到当前动画库。
Open an .actionforge file (Ctrl+O) — or a presets file from before projects	打开 .actionforge 项目文件或早期预设文件（Ctrl+O）。
Save the scene into its file again (Ctrl+S)	将场景保存到当前文件（Ctrl+S）。
Save the scene as a new file (Shift+Ctrl+S)	将场景另存为新文件（Shift+Ctrl+S）。
Copy a short link to the scene	复制场景的短链接。
Over time: copied on each frame where a key is picked in Keys or the Graph, and pasted back on those frames	逐帧复制在关键帧视图或曲线视图所选的帧，粘贴时写回对应帧。
`);

  const motion = makeDictionary(`
All directions	所有方向
Aim forward	朝向前方
Face the travel	朝向移动方向
Generate	生成
Advanced	高级
Save ▾	保存 ▾
Export ▾	导出 ▾
Save this one	保存当前动作
Save all 8	保存全部 8 个方向
Send the 8 to the playground	将 8 个方向送入主编辑器
(nothing saved yet)	（尚无保存项）
Remove	移除
ActionForge (ours)	ActionForge 内置骨架
FBX for	FBX 目标软件
Files	文件
One file, all takes inside	单个文件包含全部动作
Zip, one file per clip	ZIP 压缩包，每个动作单独一个文件
Root motion	根运动
Both (16 takes)	两种都导出（16 个动作）
Include the character	包含角色
Export this one	导出当前动作
Export all 8	导出全部 8 个方向
Export the character (rest pose)	导出角色（静止姿势）
The one in the view can be exported now; all eight, after Generate.	可以立即导出当前动作。点击「生成」后可导出全部 8 个方向。
Eight directions	八方向
Style	风格
Gait	步态
(none saved yet)	（尚无保存项）
Load	载入
To file	保存到文件
From file	从文件载入
Start over	从头开始
Preset	预设
(none)	（无）
Stroll	散步
Brisk	快步
Heavy	沉重
Sneak	潜行
Speed ×	速度倍数
stride	步幅
cadence	步频
Stride ×	步幅倍数
Cadence ×	步频倍数
Width cm	宽度（厘米）
Lift ×	抬脚高度倍数
Lower cm	降低高度（厘米）
Bounce ×	起伏倍数
Sway ×	摆动倍数
Arms ×	摆臂倍数
Lean / speed	前倾随速度变化
On ground %	触地时间 %
head looks ahead	头部朝前
Spine forward °	脊柱前倾 °
Spine side °	脊柱侧倾 °
Spine twist °	脊柱扭转 °
Follow-through	跟随动作
(own)	（自定义）
Stiff	僵硬
Loose	松弛
Chest	胸部
chest	胸部
Arms	手臂
Lag	滞后
Bounce	起伏
Loosen	放松
Directions	方向
Polish	精修
Strafe	侧向移动
Hips°	髋部 °
Knees	膝盖
Feet	脚部
Leg gap	腿间距
Swing out	向外摆动
Stride	步幅
Auto (from how it stands)	自动（根据站姿）
Unarmed walk	空手行走
Rifle walk	持枪行走
Rifle run	持枪奔跑
Classic	经典
hips swing°	髋部摆幅 °
Played once: keep its	单次播放时保留
first pose	起始姿势
last pose	结束姿势
Direction	方向
Family	动作类型
Toe lead°	前脚脚尖 °
Toe trail°	后脚脚尖 °
Knee lead°	前腿膝盖 °
Knee trail°	后腿膝盖 °
Left 90°	左 90°
toward	朝向
away	背向
Right 90°	右 90°
Front left 45°	左前 45°
Front right 45°	右前 45°
Back left 135°	左后 135°
Back right 135°	右后 135°
Foot lock	脚部锁定
Grip	着地抓力
Lock the source's feet	锁定源动作的脚部
Lean and weight	倾斜和重心
Toward travel: 45°	朝移动方向：45°
Share %: hips	髋部权重 %
head	头部
Holding a weapon	手持武器
Weight over the foot	重心移到脚上
Limit %	限制 %
down	向下
sideways	侧向
Arms kept clear	保持手臂间距
Arm gap cm	手臂间距（厘米）
Shapes ×	姿势幅度倍数
show	显示
Arm swing ×: 45°	摆臂倍数：45°
Authored strafe	自定义侧移动作
None.	无。
Use the generated strafes	使用生成的侧移动作
Source	源动画
Adjusted	调整后
Axes: the bone's own	坐标轴：骨骼局部
Axes: the world's	坐标轴：世界
whole cycle	整个周期
key at the playhead	在当前帧打关键帧
Edit trails	编辑运动轨迹
Overlays	叠加显示
Footprints	脚印
Foot lanes	落脚路径
Swing trails	摆动轨迹
Hip trail	髋部轨迹
Nothing picked	未选择
Reset all poses	重置所有姿势
Controls	控制器
Extra bones	额外骨骼
Result	结果
Temporary controls	临时控制器
Picked	已选
+ Temp control	+ 临时控制器
+ Aim	+ 瞄准
only the one picked, in the view	在视图中仅显示选中的控制器
No controls yet.	尚无控制器。
Settings	设置
Space	坐标空间
World	世界
Distance (cm)	距离（厘米）
Axis	轴向
none	无
a curve	曲线
up target	向上目标
Up axis	向上轴
Up distance (cm)	向上距离（厘米）
Rides	跟随
the world	世界
the hips	髋部
the chest	胸部
the head	头部
the left hand	左手
the right hand	右手
Bake back into bones	烘焙回骨骼
Every frame	每一帧
Your key frames	已有关键帧
Key poses	关键姿势
How many	数量
Mirror to the other side	镜像到对侧
Add	添加
On the bone	附着于骨骼
Aim	瞄准
Pin a hand	固定一只手
Spine (all three)	脊柱（全部三节）
Spine 1	脊柱 1
Spine 2	脊柱 2
Neck and head	颈部和头部
Neck	颈部
Arms (shoulder to hand)	手臂（从肩到手）
Shoulders	肩部
Upper arms	上臂
Forearms	前臂
Hands	手部
+ Control	+ 控制器
Bake into its keys	烘焙到关键帧
On the bone (next: Chest)	附着于骨骼（下一节：胸部）
In the world, as the source has it: a control on the bone above does not carry it.	沿用源动画的世界空间位置，上级骨骼控制器不会带动它。
Y (up)	Y（上）
−Y (down)	−Y（下）
X (left)	X（左）
−X (right)	−X（右）
Z (forward)	Z（前）
−Z (back)	−Z（后）
Pin	固定
Pinned to	固定到
the other hand	另一只手
Our mannequin has no bones beyond the body’s.	内置人偶仅包含人体骨骼。
Reset chains	重置骨骼链
Pick a chain to see its bones.	选择一条骨骼链以查看成员。
Split	拆分
Join with…	合并至…
Spring	弹性
None	无
Hair	头发
Skirt	裙摆
Cape	披风
Reset to the look	重置为外观预设
Stiffness	刚度
Hang	下垂
Swing limit °	最大摆角 °
Keep out of the body	避免穿过身体
Tip stiffness	末端刚度
Tip swing limit °	末端最大摆角 °
Nothing changed yet.	尚无更改。
The eight	八方向结果
Press Generate.	点击「生成」。
Add a Mixamo FBX	添加 Mixamo FBX
A character is added, rigged and matched to our bones in the Character tool on the main page. It is then listed here.	在主页面的「角色」工具中添加角色、绑定并匹配骨骼，完成后它会出现在这里。
Procedural	程序化
Channel ▾	通道 ▾
Key ▾	关键帧 ▾
Hips · Loc Z (height)	髋部 · Z 位置（高度）
both steps the same	两侧步态一致
foot	脚
left	左
right	右
Reset curve	重置曲线
Flat	平坦
Handles: auto clamped	手柄：自动钳制
Handles: automatic	手柄：自动
Handles: aligned	手柄：对齐
Handles: free	手柄：自由
Handles: vector	手柄：向量
several curves	多条曲线
Only Show Selected	仅显示选中项
Show Hidden	显示隐藏项
Filters ▾	筛选 ▾
normalize	归一化
each to its own scale	分别缩放
one cycle only	仅一个周期
Hips: height	髋部：高度
Hips: side to side	髋部：左右
Hips: forward	髋部：前后
Feet: lift	脚部：抬升
Feet: side to side	脚部：左右
Feet: forward	脚部：前后
Late	延后
Amount ×	幅度倍数
bone	骨骼
all its curves	其全部曲线
Hips	髋部
Loc Z (height)	Z 位置（高度）
Loc X (side)	X 位置（左右）
Loc Y (forward)	Y 位置（前后）
Loc Z (lift)	Z 位置（抬升）
+ Bone	+ 骨骼
Foot plant	脚部贴地
unlock foot plant	解锁脚部贴地
Reset foot plant	重置脚部贴地
`);

  const clips = makeDictionary(`
A Tpose	T 字站姿
Chest Open	打开箱子
Climbup 1m	向上攀爬 1 米
Consume	使用消耗品
Crouch Fwd Loop	蹲姿前进（循环）
Crouch Idle Loop	蹲姿待机（循环）
Dance Loop	跳舞（循环）
Death01	倒地死亡 01
Driving Loop	驾驶（循环）
Farm Harvest	收割
Farm Plantseed	播种
Farm Watering	浇水
Fixing Kneeling	跪姿修理
Fps Test	第一人称测试
Hit Chest	胸部受击
Hit Head	头部受击
Hit Knockback	受击击退
Idle Foldarms Loop	抱臂待机（循环）
Idle Lantern Loop	提灯待机（循环）
Idle Loop	待机（循环）
Idle No Loop	待机（单次）
Idle Rail Call	倚栏招呼
Idle Rail Loop	倚栏待机（循环）
Idle Shield Break	持盾破防
Idle Shield Loop	持盾待机（循环）
Idle Talking Loop	站姿说话（循环）
Idle Talkingphone Loop	打电话（循环）
Idle Torch Loop	举火把待机（循环）
Interact	交互
Jog Fwd Loop	向前慢跑（循环）
Jump Land	跳跃落地
Jump Loop	跳跃滞空（循环）
Jump Start	跳跃起跳
Laytoidle	躺姿起身转待机
Melee Hook	勾拳
Melee Hook Rec	勾拳收招
Ninjajump Idle Loop	忍者跳滞空（循环）
Ninjajump Land	忍者跳落地
Ninjajump Start	忍者跳起跳
Overhandthrow	过肩投掷
Pickup Table	从桌上拾取
Pistol Aim Down	手枪向下瞄准
Pistol Aim Neutral	手枪平举瞄准
Pistol Aim Up	手枪向上瞄准
Pistol Idle Loop	持手枪待机（循环）
Pistol Reload	手枪换弹
Pistol Shoot	手枪射击
Punch Cross	后手直拳
Punch Jab	前手刺拳
Push Loop	推物（循环）
Roll	翻滚
Shield Dash	盾牌冲刺
Shield Oneshot	盾牌单次动作
Sitting Enter	坐下
Sitting Exit	起身
Sitting Idle Loop	坐姿待机（循环）
Sitting Talking Loop	坐姿说话（循环）
Slide Exit	滑铲结束
Slide Loop	滑铲持续（循环）
Slide Start	滑铲起始
Spell Simple Enter	简单施法起势
Spell Simple Exit	简单施法收势
Spell Simple Idle Loop	简单施法待机（循环）
Spell Simple Shoot	简单法术发射
Sprint Loop	冲刺（循环）
Swim Fwd Loop	向前游泳（循环）
Swim Idle Loop	游泳待机（循环）
Sword Attack	挥剑攻击
Sword Block	持剑格挡
Sword Dash	持剑冲刺
Sword Heavy Combo	重剑连击
Sword Idle	持剑待机
Sword Regular A	常规挥剑 A
Sword Regular A Rec	常规挥剑 A 收招
Sword Regular B	常规挥剑 B
Sword Regular B Rec	常规挥剑 B 收招
Sword Regular C	常规挥剑 C
Sword Regular Combo	常规挥剑连击
Treechopping Loop	砍树（循环）
Walk Carry Loop	搬运行走（循环）
Walk Formal Loop	正式步态（循环）
Walk Loop	行走（循环）
Zombie Idle Loop	僵尸待机（循环）
Zombie Scratch	僵尸抓挠
Zombie Walk Fwd Loop	僵尸向前行走（循环）
`);

  const dialogs = makeDictionary(`
Can I use the animations commercially?	动画可以商用吗？
Yes. Every animation here, and the mannequin they play on, is in the public domain (CC0). Use them in any project, paid or free, and no credit is needed.	可以。内置动画及默认人偶采用 CC0，允许在免费或付费项目中使用，无需署名。
The library is built on the work of Quaternius, who gives it away. A credit or some support for him is welcome, never required.	素材库使用了 Quaternius 免费提供的作品。你可以自愿署名或支持作者。
What CC0 means	关于 CC0
Where are the Unreal and Mixamo characters?	哪里能找到 Unreal 和 Mixamo 角色？
They are not included. Manny, Quinn and the UE4 mannequin belong to Epic Games, and the Y Bot belongs to Adobe (Mixamo), so they are not ours to hand out.	网站未附带这些角色。Manny、Quinn 和 UE4 人偶属于 Epic Games，Y Bot 属于 Adobe（Mixamo）。
You don't need them here to export for them. Set Skeleton to Unreal or Mixamo next to the Download button, and you get the animation for the character you already have.	在导出菜单把「骨架」选为 Unreal 或 Mixamo，即可导出适用于已有角色的动画。
If you want to see an animation on one of them first, add your own copy in Characters with "+ Rigged character". It stays in your browser.	如需先预览动画，请在「角色」里通过「已绑定角色」导入自己的副本。文件保存在浏览器本地。
Do you get or store my uploaded models?	网站会收到或保存我导入的模型吗？
No. Anything you add, whether a character, an animation or a prop, is read and kept in your own browser, on your own computer. It is never sent to us or to anyone else.	导入的角色、动画和道具均在你的电脑上读取，并保存在当前浏览器本地。
That also means it lives only in that browser. A shared link does not carry it, and clearing your browser data removes it. Use the down arrow on a character's card to save a backup.	分享链接不包含本地文件。清理浏览器数据会移除它们。可通过角色卡片的向下箭头另存备份。
Why is it in the browser? Will there be an offline or desktop version?	为什么在浏览器中运行？有离线版或桌面版吗？
It runs the same on Windows, Mac and Linux with nothing to download first, and your files stay on your own computer.	Windows、Mac 和 Linux 均可直接在浏览器里运行，文件留在本机。
What file formats are supported?	支持哪些文件格式？
Characters come in as GLB or FBX. Animations of your own come in as FBX. Props come in as GLB.	角色可导入 GLB 或 FBX，FAQ 中列出的自定义动画导入格式为 FBX，道具为 GLB。
Downloads are GLB or FBX. For FBX you can pick who it is for: Blender, Unreal, Unity or Maya.	可导出 GLB 或 FBX。使用 FBX 时可选择 Blender、Unreal、Unity 或 Maya。
Which export preset do I pick for Unreal, Mixamo or Reallusion?	导出到 Unreal、Mixamo 或 Reallusion 时，该选哪个预设？
Next to the Download button, set Skeleton to where the animation is going: Unreal Engine 5 (then Manny or Quinn), Unreal Engine 4, Reallusion (CC / ActorCore) or Mixamo. The format switches to FBX for you.	在导出菜单中选择目标骨架：Unreal Engine 5（再选 Manny 或 Quinn）、Unreal Engine 4、Reallusion（CC / ActorCore）或 Mixamo。格式会自动切换到 FBX。
For anything else, such as Blender, Unity, Godot or the web, leave it on Default.	用于 Blender、Unity、Godot 或网页时，骨架可保持「默认」。
If the character you added in Characters is already on one of those skeletons, Default downloads for that character.	如果当前角色已经使用所支持的骨架，「默认」会按该角色的骨架导出。
Do I need to import the UE4/UE5 mannequin?	我需要导入 UE4 / UE5 人偶吗？
Can I use it with my custom rigged character?	可以使用自己绑定好的角色吗？
Yes. In Characters, choose "+ Rigged character" and pick a GLB or FBX file.	可以。在「角色」中选择「+ 已绑定角色」，再选择 GLB 或 FBX 文件。
Its bones are matched to ours. For Mixamo, Unreal and Reallusion skeletons that happens by itself. For any other skeleton, a side-by-side panel lets you link the joints.	页面会把角色骨骼与内置骨骼对应起来。Mixamo、Unreal 和 Reallusion 可自动匹配，其余骨架可以在并排面板中手动匹配关节。
The character keeps its own skeleton, and downloads come out on it.	角色会保留其骨架，动画导出时也使用该骨架。
Does it work with A-pose characters, or a rest pose other than a T-pose?	支持 A 姿势或其他静止姿势的角色吗？
Can I upload my own character and auto-rig it? How good is the auto weight painting?	可以导入自己的角色并自动绑定吗？自动权重效果如何？
Yes. In Characters, choose "+ Unrigged model", put a few dots on its joints and press Rig. It is rigged and skinned in your browser.	可以。在「角色」中选择「+ 未绑定模型」，标出几个关节，然后开始绑定。绑定和蒙皮在浏览器本地完成。
Why don't I see the front and side views when rigging?	为什么绑定时看不到前视图和侧视图？
They appear after you confirm the markers: place the dots, then press Rig. The Front, Side, Back and Free views show up from that point.	放置标记点并点击绑定后，前、侧、后和自由视图就会出现。
Can I use my own props or weapons?	能添加自己的道具或游戏武器模型吗？
Yes. Open Props and drop a GLB file onto it. It goes into either hand and you can move it into place. It is kept in your browser.	可以。在「道具」中拖入 GLB 文件，可将模型放入任一只手并调整位置。文件保存在当前浏览器本地。
Does FPS mode work with custom characters?	第一人称模式支持自定义角色吗？
Does it support animals, quadrupeds or horses?	支持动物、四足角色或马吗？
Not yet. Everything here is for two-legged, human-shaped characters.	目前面向双足人形角色。
Does it do facial rigging or face animation?	支持面部绑定或面部动画吗？
No. The animations move the body and the fingers. There is no face rig and no facial animation.	当前动画支持身体和手指。
Can I submit or share my own animations to the library?	能把自己的动画提交到公开素材库吗？
You can still import your own animations and use every tool here on them. They stay in your browser.	你可以导入自己的动作并使用编辑工具。动作会保存在当前浏览器本地。
Is there an API, CLI or headless mode, for example for scripts or Claude Code?	有可用于脚本的 API、命令行或无界面模式吗？
Not yet. It is planned for later.	目前尚未提供，官方计划以后加入。
`);

  const translateLabel = key => labels.get(key) ?? motion.get(key) ?? tooltips.get(key) ?? dialogs.get(key);
  const categoryNames = new Map([
    ['locomotion', '移动'], ['interaction', '交互'], ['combat', '战斗'],
    ['aim', '瞄准'], ['gestures', '手势'], ['reactions', '受击与反应'],
    ['zombie', '僵尸动作'], ['fps', '第一人称'], ['other', '其他'],
  ]);
  const dynamicLabels = [
    [/^(Frame|Start|End) (\d+)$/, (label, frame) => `${{ Frame: '当前帧', Start: '起始帧', End: '结束帧' }[label]} ${frame}`],
    [/^(\d+) (?:clips?|animations?)$/, count => `${count} 个动画`],
    [/^(\d+) poses?$/, count => `${count} 个姿势`],
    [/^(\d+) characters?$/, count => `${count} 个角色`],
    [/^(\d+) selected$/, count => `已选 ${count} 项`],
    [/^(\d+) of (\d+) clips?$/i, (shown, total) => `显示 ${shown} / ${total} 个动画`],
    [/^(\d+) of (\d+)$/, (shown, total) => `显示 ${shown} / ${total}`],
    [/^(\d+) animations? · (\d+) ticked — what the download writes$/, (total, selected) => `${total} 个动画 · 勾选 ${selected} 个（导出内容）`],
    [/^(Library|My animations|Open Recent) · (\d+)$/, (label, count) => `${translateLabel(label) ?? '最近打开'} · ${count}`],
    [/^(All|Ready|Needs rigging) (\d+)$/, (label, count) => `${{ All: '全部', Ready: '可用', 'Needs rigging': '待绑定' }[label]} ${count}`],
    [/^(locomotion|interaction|combat|aim|gestures|reactions|zombie|fps|other)( · | )(\d+)$/i, (category, separator, count) => `${categoryNames.get(category.toLowerCase())}${separator}${count}`],
    [/^(→ )?(\d+(?:\.\d+)?)\s*s(?: · (\d+)f)?( · loop)?$/, (arrow, seconds, frames, loop) => `${arrow ?? ''}${seconds} 秒${frames ? ` · ${frames} 帧` : ''}${loop ? ' · 循环' : ''}`],
    [/^(\d+(?:\.\d+)?)s \/ (\d+(?:\.\d+)?)s$/, (elapsed, total) => `${elapsed} / ${total} 秒`],
    [/^(\d+(?:\.\d+)?) fps$/, rate => `${rate} 帧/秒`],
    [/^(\d+(?:\.\d+)?) GB available$/, capacity => `可用 ${capacity} GB`],
    [/^Fetch the whole library · (.+)$/, size => `下载完整素材库 · ${size}`],
    [/^Select (.+) for bundle$/, name => `勾选 ${name} 以批量导出`],
    [/^Made by (.+)$/, name => `作者：${name}`],
    [/^IK: (Left|Right) (hand|foot)(: its IK is (?:off|on))?$/, (side, part, state) => `IK：${side === 'Left' ? '左' : '右'}${part === 'hand' ? '手' : '脚'}${state ? (state.endsWith('off') ? '（已关闭）' : '（已启用）') : ''}`],
    [/^Pole: (Left|Right) (elbow|knee)(: its IK is (?:off|on))?$/, (side, part, state) => `极向：${side === 'Left' ? '左' : '右'}${part === 'elbow' ? '肘' : '膝'}${state ? (state.endsWith('off') ? '（IK 已关闭）' : '（IK 已启用）') : ''}`],
    [/^Of the library, (\d+) of (\d+) files are kept so far: each as it is first used\.$/, (cached, total) => `素材库已缓存 ${cached} / ${total} 个文件。文件将在首次使用时缓存。`],
    [/^(.+) exports on (.+), the one in the view\.$/, (set, character) => `${set} 将使用视图中的${character === 'Mannequin' ? '默认人偶' : character}导出。`],
    [/^follows ([\w.]+)$/, bone => `跟随 ${bone}`],
  ];

  function translate(source) {
    const key = normalize(source);
    const exact = translateLabel(key);
    if (exact) return exact;
    for (const [pattern, format] of dynamicLabels) {
      const match = key.match(pattern);
      if (match) return format(...match.slice(1));
    }
    return undefined;
  }

  function clipTitle(source) {
    const lines = source.split('\n');
    const clip = clips.get(normalize(lines[0]));
    if (!clip) return undefined;
    const suffix = lines.slice(1).map((line, index) => {
      if (index === 0) {
        return line.replace(/(\d+(?:\.\d+)?)s\b/g, '$1 秒')
          .replace(/(\d+)f\b/g, '$1 帧').replace(/(\d+)fps\b/g, '$1 帧/秒')
          .replace(/\bloop\b/g, '循环').replace(/\bin place\b/g, '原地')
          .replace(/travels ([\d.]+)m\b/g, '位移 $1 米');
      }
      return translate(line) ?? line.split(', ').map(item => categoryNames.get(item) ?? item).join('、');
    });
    return [`${clip} · ${lines[0]}`, ...suffix].join('\n');
  }

  globalThis.actionForgeZh = Object.freeze({
    translate,
    clipName: source => clips.get(normalize(source)),
    clipTitle,
  });
})();
