# 活動資訊

**第 3 期 ：**<br>
**主題**：SCSS & Bootstrap 工作坊：自己實作一個 Bootstrap 元件樣式。 <br>
**時間**：11/17 早上 11:00<br>
**場地**：Notch 咖啡工場 站前店 (台北市中正區信陽街6號) <br>
**內容**：透過實作 Bootstrap 元件來認識 SCSS，並開發屬於自己的樣式表。 <br>

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

# SCSS

------
# 資料參考
- [w3schools-css](https://www.w3schools.com/css/css_selectors.asp)
- [ithelp-30天掌握Sass語法](https://ithelp.ithome.com.tw/users/20040221/ironman/562)
