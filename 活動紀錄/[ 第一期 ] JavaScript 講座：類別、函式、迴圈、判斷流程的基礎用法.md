# 活動資訊

**主題**：JavaScript 講座：類別、函式、迴圈、判斷流程的基礎用法 <br>
**時間**：11/09 早上 11:00 <br>
**場地**：COFFeee (新北市板橋區館前東路39號1) <br>
**內容**：JavaScript 類別、函式、迴圈、判斷流程介紹，並且練習實作九九乘法表。 <br>

# 重點複習
## 資料型態
JavaScript 資料型態 (Data Type) 可分為 **基本型態** 與 **複雜型態**：

**基本型態** (Primitive Data Type)
- 字串 (String)
- 數字 (Number)
- 布林值 (Boolean)
- Null
- Undefined
- BigInt
- Symbol (ES 6 新增)

**複雜型態** (Non-Primitive Data Type, Objects)
- 物件 (Object)
- 陣列 (Array)
- 函式 (Function)
- 不是基本型態的都在這裡，並且底層都是物件所衍伸的

**要辨識資料型態最快方式是非基本型態的都是物件**

---
## 函式 (Function)
函式透過 `typeof` 檢查會得到 `function` 的結果，但是函式其實也就是物件的一種形式。
而參考 MDN 對於 Function 的解釋，函式的組成主要可分為三個部分：
- 函式名稱
- 函式中的`()`：以逗號區隔 `,` 來劃分傳送參數。`ex: (a, b, c)`
- 函式中的`{}`：以定義該函式要執行的內容

### 呼叫函式
呼叫函式的作法是函式名稱加上()，而()內可以放入想要傳遞的參數，例如：
```js
function sample(x){
    return console.log(x)
}
sample('Hello, function!')
```
如此一來 `sample` 函式就會接收到 `'Hello, function!'` 的字串，傳遞到函式當中，並執行 `console.log('Hello, function!')`。

### 建立函式
創造函式的方法有三種作法：
- 宣告函式（Function Declaration）
- 函式運算式（Function Expressions）
- 透過 new 關鍵字建立

#### 宣告函式 (Function Declaration)
#### 函式運算式 (Function Expressions)
#### new Function

#### 隱式建立
#### 函式提升 (Hoisting)
#### 作用域 (Scope)
#### 閉包 (Closure)

---
### 參照方式
參照方式可分為
- `call by value`
- `call by refference`
- `call by sharing`

**但三者講的內容都是在指 `pass by value` 中記憶體存取的概念**

#### call by value
當 B 變數透過賦值運算子 `=` 接收來自 A 變數的值時，若來源 B 變數數值資料型態為 **基本型態**
```js
let A = 'Hello, JavaScript.'
let B = A // console.log 得到的結果為 'Hello, JavaScript.'
          // 這裡記憶體儲存的 'Hello, JavaScript.' 是一份全新的數值，與 A 變數的數值無關。
```

####  call by refference
當 B 變數透過賦值運算子 `=` 接收來自 A 變數的值時，若來源 B 變數數值資料型態為 **複雜型態**
```js
let A = { 'name': 'Shawn', 'age': 25 }
let B = A // console.log 得到的結果為 { 'name': Shawm, 'age': 25 } 
          // 這裡記憶體儲存的 { 'name': Shawm, 'age': 25 }  是指向到 A 變數容器指向的記憶體空間
          // 也就是說若修改 B 變數的資料時，實際上也是在改 A 指向的資料。
console.log(A.age) // 25
B.age = 26
console.log(A.age) // 26
```

#### call by sharing
透過 function 傳送參數引入物件，若讀取物件後更改內部的值，則會依循記憶體位置先找到該記憶體位置的內容，再改變內部數值，所以參考記憶體位置相同，因此內部改變會影響到外部的物件
```js
function change(obj){
  obj.age = 26 // 這裡會先去尋找 obj 的記憶體位置，並且撈取裡面 `key: age`，接著更改裡面的數值 `value`。
}

let obj = { 'name': 'Shawn', 'age': 25 }
console.log(obj.age) // 25
change(obj)
console.log(obj.age) // 26

```

透過 function 傳送參數引入物件，若將傳遞進來的變數賦值，則會在函式內部重新指向另一個記憶體位置，但外部的仍舊參考原本的記憶體位置，因此內部改變不影響到外部的物件。
```js
function change(obj){
  obj = {            // 這裡已經透過賦值運算子 = 重新指向另一個物件了，因此在函式內部的 obj 指向的已經是另一個位置
    'name': 'Sam', 
    'age': 26
  }
}

let obj = { 'name': 'Shawn', 'age': 25 }
console.log(obj.name) // 'Shawn'
console.log(obj.age) // 25
change(obj)
console.log(obj.name) // 'Shawn'
console.log(obj.age) // 25
```
---
# 資料參考
- [w3schools-data-type](https://www.w3schools.com/js/js_datatypes.asp)
- [MDN-JavaScript-Function](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Functions)
- [重新認識 JavaScript: Day 10 函式 Functions 的基本概念](https://ithelp.ithome.com.tw/articles/10191549)
- [我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)
- [深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/)
