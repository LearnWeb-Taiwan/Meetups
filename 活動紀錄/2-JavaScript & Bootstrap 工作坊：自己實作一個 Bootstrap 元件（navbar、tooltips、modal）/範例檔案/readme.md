**此份檔案練習的是模擬 Bootstrap Navbar 元件，在不透過第三方函式庫的情況下，以 JavaScript 來製作類似的元件效果。**

若自行刻畫面的話，Navbar 元件目前需要模擬的是
- 當畫面大於一定範圍時，右邊的 Menu 按鈕需隱藏
- 當畫面小於一定範圍時，右邊的 Menu 按鈕需顯示
- 當畫面小於一定範圍時，一級列表需顯示
- 當畫面小於一定範圍時，一級列表需隱藏
- 當畫面小於一定範圍時，點擊右邊的 Menu 按鈕需顯示一級列表選單
- 不論畫面大小，點擊一級選單時，需要將其二級選單中的內容伸展開，並且制定符合版面大小的樣式。

若套用樣板的話，Navbar 元件目前需要模擬的是
- 當畫面小於一定範圍時，`<i class="icon icon-toggle-menu"></i>` 元素需 增加/刪除 `active` class 名稱來驅動右側 Menu 顯示/隱藏
- 當畫面小於一定範圍時，`<ul class="navbar-nav"></ul>` 元素需 增加/刪除 `collapse` class 名稱來驅動左側項目欄 顯示/隱藏
- 當畫面小於一定範圍時，點擊 `<i class="icon icon-toggle-menu"></i>` 後，`<ul class="navbar-nav"></ul>` 
- 不論畫面大小，點擊 `<div class="nav-dropdown-menu"></div>` 元素時，將他的二級選單打開（加上 `active` class 名稱）
