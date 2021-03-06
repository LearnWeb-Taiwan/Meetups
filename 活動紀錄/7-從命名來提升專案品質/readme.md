# 活動資訊

**第 7 期 ：**<br>
**主題**：從命名來提升專案品質<br>
**講者**：ShawnL<br>
**時間**：2020/05/23 早上 11:00<br>
**場地**：Notch 咖啡工場 站前店 (台北市中正區信陽街6號) <br>
**內容**：講解從專案到 CSS、JavaScript 中各種命名情境、陷阱與心得。 <br>
**簡報**：[簡報](https://docs.google.com/presentation/d/e/2PACX-1vQou__qYMEEyGws93wsXTB40LviiHQm3WjeCxllDTaO9SZFpD3_FYlIYMAaQSES8c9qTKgxykFeFPmA/pub?start=false&loop=false&delayms=60000)

# Naming
- 為何我們需要一個好的命名？ => 往後開發時看程式時間遠大於寫程式的時間 => 優化後能縮短看程式的時間

# 通用準則
- 要能解釋它是做什麼的。
- 同個專案，同個概念，同個名稱。
- 使用工程師領域的詞彙。
- 使用工具，用該工具社群常用詞彙。
- 避免短詞彙，方便搜尋工具可以快速找到。

# Naming in files
- 專案版控名稱，可以以公司、頻道、服務為階層。
- 資料夾名稱所見及所得，名稱會自動幫你歸類好檔案。 => public, asset, images, scss
- 檔案名稱以英文字開頭，除非你確定相關依賴都能接受其他字元。
- 使用框架？按照它的規範吧！ => UI Library, framework , etc.

# Naming is CSS
- 原則
- 類型
- 陷阱

## CSS 命名常見的原則
- 可預測、可重複利用 => 要怎麼知道？ => 靠寫多而來的經驗或參考 UI 庫命名
- 盡量別命名在元素上 => 使用 '>' 選擇器

## CSS 命名類型
- 有用工具：遵循依賴工具的規範
- 沒用工具：避免太自由、太奔放 => 需要一點命名邏輯 => 方法論

### CSS 方法論
~請不要記名稱浪費腦容量，重點在於概念，觀察分類的依據~
- SMACSS
- BEM
- OOCSS

#### SMACSS
- 基底：Base（reset, normalize）
- 區域：Layout（navbar, header, footer）
- 區域中的小玩意兒：Module: sub-layout（navbar-title, header-slogan）
- 狀態：State: is-state（is-hidden, is-active）
- 樣式模式：Theme（navbar-dark）

```html
<nav class="navbar navbar-dark">
  <div class="navbar-logo">
  </div>
  <ul class="navbar-list">
    <li class="navbar-item">
      <a class="navbar-link"> Home </a>
    </li>
  </ul>
</nav>
```

#### BEM
- 區塊：Block（navbar, navbar-list）
- 區塊元素：Element（navbar-list_item）
- 區塊元素狀態：Module（navbar-list_item__isActive）

```html
<nav class="navbar>
  <div class="navbar-logo">
  </div>
  <ul class="navbar-list">
    <li class="navbar-list_item">
      <a class="navbar-list_link__isActive"> Home </a>
    </li>
  </ul>
</nav>
```

#### OOCSS
- 所有東西都是物件。e.g. 寶特瓶: 可樂、汽水、果汁 => 寶特瓶就是一個元件 => 還可拆成 瓶蓋、瓶身、材質等等
- 儘量將選擇器的使用最小化。e.g. 一個選擇器可創造 2^1 個樣式 => 依此類推 2^2 , 2^3 個
- 分離結構與樣式（Separate Structure and Skin）。 e.g. 想像漢堡
- 分離容器與內容（Separate Container and Content）。e.g. 想像飲料寶特瓶
- 避免使用ID選擇器。


```css
.btn {
  display:inline-block;
  width:100px;
  height:50px;
}
.light-border {
  border:2px solid black;
  border-radius: 4px;
}
```

```html
<div class="btn light-border">Click Me!</div>
```

### CSS 工具
普遍偏向 OOCSS，但 OO 廣度、深度不太不一樣
- [Boostrap](https://getbootstrap.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Semantic UI](https://semantic-ui.com/)
- [Materialize CSS](https://materializecss.com/) 

## CSS 命名陷阱
- 所見不為所得 => 眼前的黑不是黑，你說的白是什麼白。
- 唯一性命名 => 探討 Boostrap color 為何會有 danger 的情況
- 全域燒全家 => 探討 !important 的濫用危險

# 命名 in JavaScript
- 命名法
- 類型
- 重構


- JavaBeans 規範。

## JavaScript 命名法
- Camel Case（小駝峰式命名）： `getMemberInfo`、`setCookie`
- Pascal Case(帕斯卡、大駝峰式命名)： `GetMemberInfo`、`SetCookie`
- Snake Case： `get_member_info`、`set_cookie`
- Kebeb Case： `get-memberInfo`、`set-cookie`

## 依照資料類型
- 變數
- 類別
- 函式

### 變數
一般為小駝峰
常數為全大寫加底線

```js
let houseList = [{}, {}]

let GOLDEN_RATIO = 1.6180339
```

### 類別
大駝峰

```js
new Date();
```

### 函式
- 動詞 + 動名詞等等
- is 開頭 => 預測返回布林值
- JavaBeans 規範。（get、set）

```js
postMemberCart();

isLoading();

getPageDate();
setCookies();
```

## 重構
- 修正過去鑄下的錯誤 => 社會勞動服務
- 一時無法有良好的命名可以留個資訊提醒 => 盡量第一次就命名好一點 => 因為大家多半不會回來改(joke)

# LIVE DEMO
