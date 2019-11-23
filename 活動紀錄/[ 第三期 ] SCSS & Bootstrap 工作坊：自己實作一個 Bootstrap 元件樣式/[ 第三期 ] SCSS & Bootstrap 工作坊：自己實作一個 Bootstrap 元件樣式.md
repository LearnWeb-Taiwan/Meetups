# 活動資訊

**第 3 期 ：**<br>
**主題**：SCSS & Bootstrap 工作坊：自己實作一個 Bootstrap 元件樣式。 <br>
**時間**：11/17 早上 11:00<br>
**場地**：Notch 咖啡工場 站前店 (台北市中正區信陽街6號) <br>
**內容**：透過實作 Bootstrap 元件來認識 SCSS，並開發屬於自己的樣式表。 <br>
**簡報**：[連結](https://docs.google.com/presentation/d/e/2PACX-1vRrajKCE7pUJKOPBY-mwJpy2OH1HmXxB1tHpxZxYP81Dtq4jdFs-hCHR8uSb6U1UZQO6_ThR8NHG-0s/pub?start=false&loop=false&delayms=60000)<br>

# 重點與補充

# CSS
- selector 選擇器
- declaration 聲明樣式 => `{ ... }`
- syntax 語法 => `selector { property: value; }`

## selector 選擇器

- simple selectors 一般選擇器/簡單選擇器
- combinator selectors 組合選擇器
- Pseudo-class selectors 偽類選擇器
- Pseudo-elements selectors 偽元素選擇器
- Attribute selectors 屬性選擇器

---

### Simple selector 一般選擇器

- name selector 元素選擇器： `<h1> => h1 { ... }`
- id selector id 選擇器： `<h1 id="sample"> => #sample { ... }`
- class selector class 選擇器：`<h1 class="sample"> => .sample { ... }`

---

### Combinator 組合選擇器

- descendant selector 後裔選擇器
- child selector (>) 子層選擇器
- adjacent sibling selector (+) 相鄰選擇器
- general sibling selector (~) 同層相鄰選擇器

#### descendant selector 後裔選擇器
`div p { ... }`
```
<div>
  <p></p>   // 符合
  <div>
    <p></p> // 符合
  </div>
  <p></p>   // 符合
</div>
```

#### child selector 子層選擇器
`div > p { ... }`
``` html
<div>
  <p></p>   // 符合
  <div>
    <p></p> // 不符合
  </div>
  <p></p>   // 符合
</div>
```

#### adjacent sibling selector 相鄰選擇器
`div + p { ... }`
``` html
<div>
  <p></p>   // 不符合
</div>
<p></p>     // 符合
<p></p>     // 不符合
<p></p>     // 不符合
```

#### general sibling selector 同層相鄰選擇器
`div ~ p { ... }`
``` html
<div>
  <p></p>   // 不符合
</div>
<p></p>     // 符合
<p></p>     // 符合
<p></p>     // 符合
```
---

### Pseudo-class selectors 偽類選擇器
- anchor pseudo-classes 定錨偽類選擇器： `a:link { ... }`、`a:visit { ... }`、`a:hover { ... }`、`a:active { ... }`
- :focus
- :blur
- [more](https://www.w3schools.com/css/css_pseudo_classes.asp)

---

### Pseudo-elements selectors 偽元素選擇器
- ::after
- ::before
- ::selection
- ::first-letter
- ::first-line

---

### Attribute selectors 屬性選擇器
- ::after
- ::before
- ::selection
- ::first-letter
- ::first-line

---

# Sass/SCSS
- Why Sass/SCSS
- 解析 .sass/.scss 檔案
- Sass/SCSS 差異
- Sass/SCSS 用法

## Why Sass/SCSS
- 解決 CSS 常遇到的問題
- 重工
- 牽一髮而動全身
- 瀏覽器前綴
- 函式

## 解析 .sass/.scss 檔案
- [Live Sass Compiler擴充工具](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- Koala
- Prepros

### Live Sass Compiler Setting

```json
{
    "liveSassCompile.settings.formats": [
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "/css"
    },
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/dist/style"
    }
    ],
}
```
**Tip: 預設根目錄會是工作區中第一個資料夾**
**Tip: 在 VSCODE 工作區中指定的資料夾 => `../"檔案夾名稱"/`**

## Sass/SCSS 差異
- Sass：縮排
- SCSS：如同 CSS

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo {
  width:4em;
  height:2em;
}

.navbar .logo .logo-img {
  width:100%;
  height:100%;
  object-fit:cover;
}
```

```sass
.navbar 
  position: fixed
  top: 0
  left: 0
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  .logo 
    width:4em
    height:2em
    .logo-img 
      width:100%
      height:100%
      object-fit:cover
```

```scss
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width:4em;
    height:2em;
    .logo-img {
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
}
```

## Sass/SCSS 用法

- Variables 變數
- Nesting 巢狀
- Partials 檔案分離
- Selector 選擇器 &
- Mixins 混和
- Arguments 傳參
- Extend 繼承
- Flow Control 流程控制
- Function 函式
- Built-in Functions 內建函式

## Variables 變數
使用錢字號 `$` 定義變數名稱，並使用冒號 `:` 來定義其值。

```scss
$font-title-color: #0a0a0a;

.news-title {
  color:$font-title-color;
}
.shop-title {
  color:$font-title-color;
}
```

編譯後的結果：

```css
.news-title {
  color: #0a0a0a;
}

.shop-title {
  color: #0a0a0a;
}
```

## Nesting 巢狀
讓原先鑲嵌的 CSS 能夠以巢狀的邏輯形式呈現。

```scss
#news {
  .news-article {
    .news-title {
      font-weight:bold;
    }
    .news-body {
      color: #202020
    }
  }
}
```

編譯後的結果：

```css
#news .news-article .news-title {
  font-weight: bold;
}

#news .news-article .news-body {
  color: #202020;
}
```

## Partials 檔案分離
加入下底線 `_` 來表示編譯時，不要將其檔案編譯，並透過 `@import` 引入該檔案。

假設 SCSS 資料夾中有
```
App.scss
_font.scss
_basic.scss
_variable.scss
```

App.scss 檔案中可寫

```scss
@import './font';
@import './basic';
@import './variable';
```

**須注意 import 順序會影響編譯後引入的順序，所以一樣要注意後蓋前的 CSS 問題**

## Selector 選擇器 &
`&` 為 Sass/SCSS 中提供的選擇器，用意是替代巢狀中父層選擇器的名稱。

```scss
#news {
  .news-article {
    &-title {
      font-weight:bold;
    }
    &-body {
      color: #202020
    }
  }
}
```

編譯後的結果：

```css
#news .news-article-title {
  font-weight: bold;
}

#news .news-article-body {
  color: #202020;
}
```

## Mixins 混和
 Mixins 提供組合 Sass/SCSS 的功能，使重複的內容可以打包在一起。
 - `@mixin`：啟用語法
 - `@include 'mixin名稱'`：引入 `@mixin`

```scss
@mixin text-format {
  font-family: Verdana;
  font-weight: bold;
}

.article-title {
  @include text-format
}
```

編譯後的結果：

```css
.article-title {
  font-family: Verdana;
  font-weight: bold;
}
```

## Arguments 傳參
替 Mixins 加入傳參，可解決像是瀏覽器供應商等問題需求。
```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

編譯後的結果：

```css
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
```

## Extend 繼承
不同於 Mixins，Extend 提供的功能是擴充原本 SCSS 部分，並且繼承者本身會保留下來。
```scss
.btn {
  font-weight: bold;
  font-size: 16px;
  border-width: 2px;
  border-radius: 2px;
}

.btn-blue {
  border-color:#006eff00;
  @extend .btn
}

.btn-red {
  border-color:#ff3c3c00;
  @extend .btn
}
```
編譯後的結果：
```css
.btn, .btn-blue, .btn-red {
  font-weight: bold;
  font-size: 16px;
  border-width: 2px;
  border-radius: 2px;
}

.btn-blue {
  border-color: #006eff00;
}

.btn-red {
  border-color: #ff3c3c00;
}
```
## Flow Control 流程控制
類似 JavaScript 裡面的 if、else、each、for、while。

```scss
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```
編譯後的結果：
```css
ul:nth-child(3n + 1) {
  background-color: #004080;
}

ul:nth-child(3n + 2) {
  background-color: #004d99;
}

ul:nth-child(3n + 3) {
  background-color: #0059b3;
}
```

## Function 函式
類似於 JavaScript 中的 function。

```scss
@function rem($targetFontPx, $rootFontSize: 16px){
  @return ( $targetFontPx / $rootFontSize ) + 0rem;
}

.article-title {
  font-size: rem(16px);
}
```
編譯後的結果：
```css
.article-title {
  font-size: 1rem;
}
```

## Built-in Functions 內建函式
Sass/SCSS 內建了許多不同的函式可以使用，像可以把顏色加亮的 `lighten()`、或是把顏色轉色相的 `adjust-hue()` 等等。

```scss
.shop-item {
  background: adjust-hue(#6b717f, 60deg)
}
```
編譯後的結果：
```css
.shop-item {
  background: #796b7f;
}
```

## CSS 命名心法
- OOCSS
- SMACSS
- BEM

### OOCSS

OOCSS（Object Oriented CSS）是 Nicole Sullivan 於 2009 年提出的一種命名方法，簡報裡面提出兩個原則與十九項建議大括如下：

- 建立CSS如同建立元件庫的概念。
- 儘量將選擇器的使用簡單最小化。
- 分離結構與樣式（Separate Structure and Skin）
- 分離容器與內容（Separate Container and Content）
- 避免使用ID選擇器。

依據這些原則與建議試著改寫一段CSS程式碼：

```css
  button {
    border:none;
    color:white;
    background:lightblue;
  }
  span {
    color:white;
    background:lightblue;
    font-size:1.2rem;
    padding:5px 15px;
  }
```

接著將重複的樣式抽取出來，並且將其 class 化：

```css
  .btn {
    border:none;
  }
  .content {
    font-size:1.2rem;
    padding:5px 15px;
  }
  .skin-lightblue{
    color:white;
    background:lightblue;
  }
```

這樣一來在 HTML 部分我們就可以更精簡且可重複利用的方式使用樣式：

```html
<div>
    <button type="button" class="btn skin-lightblue">click</button>
    <span class="content skin-lightblue">content</span>
</div>
```

------
# 資料參考
- [Sass 官網](https://Sass-lang.com/)
- [w3schools-css](https://www.w3schools.com/css/css_selectors.asp)
- [ithelp-30天掌握Sass語法](https://ithelp.ithome.com.tw/users/20040221/ironman/562)
- [SASS文件](https://sass-lang.com/documentation)
- [Sassmeister](https://www.sassmeister.com/)
- [Compass github](https://github.com/Compass/compass)
- [Haml wiki](https://zh.wikipedia.org/wiki/Haml)
- [SASS wiki](https://zh.wikipedia.org/wiki/Sass)
- [best-css-preprocessor](https://www.creativebloq.com/features/best-css-preprocessor)
- [30天掌握Sass語法](https://ithelp.ithome.com.tw/users/20040221/ironman/562)
- [SASS : VSCode 套件安裝](https://ithelp.ithome.com.tw/articles/10203396?sc=iThelpR)
- [SCSS 15分鐘入門](http://eddychang.me/learn-scss-in-15-mins/)
- [ERAY NOTE：編譯SASS/SCSS方式](https://medium.com/@youngox9/%E7%B7%A8%E8%AD%AFsass-scss%E6%96%B9%E5%BC%8F-467007c1c337)
