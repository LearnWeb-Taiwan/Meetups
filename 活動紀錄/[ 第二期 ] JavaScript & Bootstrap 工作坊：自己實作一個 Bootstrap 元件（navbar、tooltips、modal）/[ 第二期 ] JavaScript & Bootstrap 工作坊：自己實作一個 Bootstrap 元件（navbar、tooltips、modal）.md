# 活動資訊

**第 2 期 ：**<br>
**主題**：JavaScript & Bootstrap 工作坊：自己實作一個 Bootstrap 元件（navbar、tooltips、modal）。 <br>
**時間**：11/17 早上 11:00<br>
**場地**：Notch 咖啡工場 站前店 (台北市中正區信陽街6號) <br>
**內容**：Bootstrap 工作坊，透過實作 Bootstrap 元件來認識 JavaScript 中 DOM 與 BOM 的概念。 <br>
**Bonus 主題**：如何快速利用 Markdown 打造你的專業筆記！ <br>
**Bonus 主題**：由前端工程師角度分享專案開發流程。 <br>
**Bonus 主題**：什麼？你還沒去過天瓏書店嗎？ <br>

# 重點與補充
## JavaScript
### 前端與 JavaScript
- HTML
- CSS
- JavaScript

脫離網頁的 JavaScript => Node.js

### 瀏覽器與 JavaScript
- JavaScript 核心
- BOM (Browser Object Model)
- DOM (Document Object Model)

------
## BOM 瀏覽器物件模型
- 核心：window 物件（內含 document, history, location, navigator, screen 等等 API）

### window
- JavaScript 與 瀏覽器的窗口
- 全域物件 (Global Object)
ex: alert

------
## DOM 文件物件模型
- 以樹狀結構描述 HTML、XML 和 SVG 文件的模型
- DOM API (`document.getElementById()`)
- [更多 API](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)

ex:
```js
<html>
	<head>
	</head>
	<body>
		<p>Hello, world</p>
	</body>
</html>
```
## BOM DOM
- BOM 控制瀏覽器，非網頁內容，受瀏覽器廠商規範
- DOM 控制網頁內容，受 W3C 制定規則來規範

------
## Bootstrap
- 集合 HTML, CSS(SCSS), JavaScript 的協助開發工具
- 實務上的運用

### Navbar
- [Navbar](https://getbootstrap.com/docs/4.3/components/navbar/)

### Tooltips
- [Tooltips](https://getbootstrap.com/docs/4.3/components/tooltips/)

### Modal
- [Modal](https://getbootstrap.com/docs/4.3/components/modal/)

------
## Markdown
- [iThelp-Markdown說明](https://ithelp.ithome.com.tw/markdown)
-	[Markdown文件](https://markdown.tw/)
-	[LearnJS-Project](https://github.com/LearnWeb-Taipei/LearnJS-Project)

------
## 開發

### 流程
- 隕石流
- 敏捷式
   - Trello
	 - slack

### 版本控管
- git
- git GUI：GitHub Desktop、Source Tree

### 倉庫
- Mircosoft Team Foundation

### 傳送資料
- FTP

------
# 資料參考

[MDN-window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
[MDN-文件物件模型 (DOM)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)
[JavaScript學習總結(一) ECMAScript、BOM、DOM（核心、瀏覽器物件模型與文件物件模型）](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/219634/#outline__3)
[重新認識 JavaScript: Day 11 前端工程師的主戰場：瀏覽器裡的 JavaScript](https://ithelp.ithome.com.tw/articles/10191666)
[從頭打造一個簡單的 Virtual DOM](https://blog.techbridge.cc/2019/02/04/vdom-from-scratch/)