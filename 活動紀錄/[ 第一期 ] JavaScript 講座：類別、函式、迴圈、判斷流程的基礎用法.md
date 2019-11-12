## 活動資訊

**主題**：JavaScript 講座：類別、函式、迴圈、判斷流程的基礎用法 <br>
**時間**：11/09 早上 11:00 <br>
**場地**：COFFeee (新北市板橋區館前東路39號1) <br>
**內容**：JavaScript 類別、函式、迴圈、判斷流程介紹，並且練習實作九九乘法表。 <br>

## 重點複習
### 資料型態
JavaScript 資料型態 (Data Type) 可分為 **基本型態** 與 **複雜型態**：

**基本型態** (Primitive Data Type)
- 字串 (String)
- 數字 (Number)
- 布林值 (Boolean)
- Null
- Undefined
- BigInt
- Symbol (ES 6 新增)

**複雜型態** (Non-primitive Data Type)
- 物件 (Object)
- 陣列 (Array)

**要辨識資料型態最快方式是非基本型態的都是物件**

---
### 函式 (Function)
資料型態屬於物件的一種資料，但是透過 `typeof` 檢查會得到 `function` 的結果

---
### 參照方式
參照方式可分為
- `call by value`
- `call by refference`
- `call by sharing`
**但三者講的內容都是在指 `call by value` 中記憶體存取的概念**

**call by value**： <br>
當 B 變數透過賦值運算子 `=` 接收來自 A 變數的值時，若來源 B 變數數值資料型態為 **基本型態**
```js
let A = 'Hello, JavaScript.'
let B = A // console.log 得到的結果為 'Hello, JavaScript.'
          // 這裡記憶體儲存的 'Hello, JavaScript.' 是一份全新的數值，與 A 變數的數值無關。
```

**call by refference**： <br>
當 B 變數透過賦值運算子 `=` 接收來自 A 變數的值時，若來源 B 變數數值資料型態為 **複雜型態**
```js
let A = { 'name': Shawm, 'age': 25 }
let B = A // console.log 得到的結果為 { 'name': Shawm, 'age': 25 } 
          // 這裡記憶體儲存的 { 'name': Shawm, 'age': 25 }  是指向到 A 變數容器指向的記憶體空間
          // 也就是說若修改 B 變數的資料時，實際上也是在改 A 指向的資料。
console.log(A.age) // 25
B.age = 26
console.log(A.age) // 26
```

**call by sharing**： <br>
若是透過 function 傳送參數
```js
function sample(obj){
  obj = { 
    'name': Shawm, 
    'age': 25
  }
}

let obj = { 'name': Shawm, 'age': 25 }
```
---
## 資料參考
[w3schools-data-type](https://www.w3schools.com/js/js_datatypes.asp)
