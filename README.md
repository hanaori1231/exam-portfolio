# EXAM PORTFOLIO — LOCAL ONLY

SOU CHIHAKU 美大受験 / 入试作品集。纯 HTML / CSS / JavaScript，无构建依赖。

## 本地预览

```sh
cd /Users/caozhibo/Creative/Portfolio/exam-portfolio
python3 -m http.server 8765 --bind 127.0.0.1
```

打开 http://localhost:8765 。不要使用 file://。

## 添加作品

1. 图片放入对应目录：
   - `assets/color-composition/exam/` 受験期平面構成（预计 10–15 件）
   - `assets/color-composition/university/` 大学平面構成（预计 6–10 件）
   - `assets/dessin/` 素描（预计 6–10 件）
   - `assets/entrance-exam/` 入试再现
2. 在 `works.js` 的 `WORKS` 对应数组中添加对象。数组顺序即展示顺序。
3. `image` 使用相对路径，`alt` 写实际画面描述。`title/category/period/year/material/duration` 仅填已确认信息，可省略。
4. 某个数组为空时显示开发占位；添加第一件作品后该分类自动不再显示占位。

```js
// 结构示例；请用真实信息替换，不要原样作为作品发布。
{ title: "作品标题", category: "平面構成 / 色彩构成", period: "受験期 / 入试时期",
  image: "assets/color-composition/exam/文件名.jpg", alt: "实际画面描述" }
```

## X Embedded Post

仅修改 `works.js` 顶部的 `X_POST_URL`。支持 https://x.com/用户名/status/数字ID。
未提供 URL 时不请求 X。提供后使用官方 `https://platform.twitter.com/widgets.js` 和 `twttr.widgets.createTweet`。
原始链接始终保留，脚本失败、帖子不可用或 12 秒超时会显示中日文提示和 View on X ↗。
不写入点赞/转发数量，不修改官方 embed 内部样式，不使用付费 API。
参考：https://blog.x.com/developer/en_us/topics/tips/2019/displaying-tweets-in-ios-apps

## 设计复用

只读来源：`/Users/caozhibo/Creative/Portfolio/portfolio.czb.deploy`。
`styles.css` 与 `favicon.svg` 完整原样复制；所有适配集中于 `exam.css`。
首页的字体、色彩、背景网格、PORT/FOLIO 标题、导航、Footer 布局直接沿用。
画廊沿用 `projects/dessin.html` 的四列 / 手机两列、3:4 缩略图、hover、caption 和全屏预览。
Support 沿用首页 About 的滚动模糊与位移动画。补充键盘焦点管理、关闭后焦点恢复及减弱动态效果偏好。
主站没有自定义 cursor；此站沿用默认 cursor。

## 当前状态

所有作品列表留空；没有复制、生成或推测任何作品，没有虚构经历。
等待用户第一轮审核以及真实作品 / X URL。
未添加部署配置、CNAME、GitHub Actions；未 push，未部署。

## 语言版本（2026-10-06）

- `/` 固定进入 `/ch/`，不检测浏览器语言；JavaScript 跳转保留 query / hash。
- `/ch/index.html` 与 `/jp/index.html` 仅分别维护页面文案。
- 两版共用根目录 `styles.css`、`exam.css`、`works.js`、`language.js`、`exam.js`、`favicon.svg` 与 `assets/`。
- 图片路径仍填写 `assets/...`，渲染时统一按站点根目录解析，避免语言目录影响路径。
- `works.js` 的作品列表与 X_POST_URL 唯一；可翻译字段支持 `{ ch: "...", jp: "..." }`，图片/数量/顺序共用。
- `language.js` 的 LANGUAGE_PAGES 记录存在的语言页面。以后新增 detail HTML 时登记对应路径；缺少对应语言时回到该语言首页，不探测不存在的页面、不制造 404。
- 首页切换保留 hash；无 hash 时使用当前浏览区域。普通链接，无下拉菜单。
- hreflang 使用计划中的最终域名，仅为 HTML metadata，不配置域名或部署。
