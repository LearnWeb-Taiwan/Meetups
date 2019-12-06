# 活動資訊

**第 4 期 ：**<br>
**主題**：喝杯 Mocha 工作坊 <br>
**時間**：12/7 早上 11:00<br>
**場地**：Notch 咖啡工場 站前店 (台北市中正區信陽街6號) <br>
**內容**：以 TDD 開發思維，使用 Mocha.js 來撰寫測試程式碼；並透過 Travis CI 部屬來執行自動化測試。 <br>

# 簡報

## 初入測試
- 為何需要撰寫測試程式碼？
- 測試的整體概念。
- 如何撰寫測試程式碼？
- 測試程式碼中的挑戰。


## 為何需要撰寫程式碼
- 檢驗程式碼運作邏輯是否符合預期。
- 加速測試迭代的時間。
- 提升團隊對程式碼的信心。
**前端測試與後端測試的差異。**
- 前端：關注在表現層（Presentation Layer），也就是視覺上的呈現（UI Interface）。
- 後端：關注在商業邏輯層（Business Layer）與資料存取層（Database Layer）。

## 測試的整體概念
- Philosoply 測試原理：TDD、BDD、CI
- Methodologies 測試方法：單元測試、整合測試、端對端測試
- Constructs 測試結構：spies, stubs, mocks, fixtures
- Library 測試庫：Mocha, Jasmine, Jest, Chai, Sinon
- Tools 測試工具：Protractor, Jenkins, Travis, NightWatch

## 如何撰寫
- 擬定好專案中需要測試的資源環境、工具、函式庫。
- 選用測試開發原理，與測試方法。
- 理解測試結構中的一些輔助術語實際用法。
- 實作概念驗證程式碼（POC，Proof of Concept）。

## 測試中的挑戰
- 釐清測試類型（邏輯、功能、視覺、流程）。
- 異步行為中的測試。
- 持續整合（CI，Continuous Intergration）。

---

# 實作

## 實作事前準備
- 測試函式庫
- 測試斷言庫（Assertion）
- 測試隔離庫

## 實作流程
- 寫一隻程式，並檢驗是否正確。（可以透過 Node.js 執行程式，或透過瀏覽器引擎協助測試）
- 使用測試庫 Mocha.js 來撰寫測試程式碼。
- 使用斷言庫 Chai.js 來做條件判斷。
- 使用隔離庫 Sinon.js 來做測試替身。
- 使用持續整合工具 Travis CI 來做自動化測試。

## 建立開發環境
- Download VSCODE
- Download Node.js
- `npm init`
- `npm install mocha --save-dev`
- `npm install chai --save-dev`
- `npm install sinon --save-dev`

## 開發環境結構
├── node_modules/       // 使用 npm 下載管理的模組會集中在此
├── test/               // 測試程式碼預設資料夾位置
│   └── add.spec.js     // 測試程式碼檔案
├── add.js              // 你寫好的 JavaScript 檔案
├── package-lock.json   // npm 文件檔（預設模組，不必去動他）
└── package.json        // npm 文件檔

## add.js
```javascript
function add (a,b) {
    return a + b
}

module.exports = add
```

## add.spec.js
```javascript
// 引入斷言庫、寫好的程式
let assert = require('chai').assert
const add = require('../add')

// 描述測試環境
describe('add function test', () => {

    // 描述測試案例
    it('return expected result', () => {
        // 透過斷言庫來寫判斷式
        assert.deepEqual(add(1,2),3,'doesn\'t return expected result')
    })

    it('return expected result', () => {
        assert.deepEqual(add(100,200),300,'doesn\'t return expected result')
    })
})
```

## package.json
```javascript
"scripts": {
  "test": "mocha"
}
```

執行 `npm test` 秀出檢驗結果

# 單元測試開發模式
依據不同的開發模式與順序可分為：
- TBD：先測試而後開發（Test Before Development）
    - TDD：測試驅動開發（Test-Driven Development）
    - BDD：行為驅動開發（Behavior Driven Development）
- TAD：先開發而後測試（Test After Development）

## TDD
測試驅動開發（TDD，Test-Driven Development），是一種由藉由先撰寫測試，才實作功能並持續驗證是否通過測試的程式開發技巧。

### TDD 優點
- 避免後期產品程式碼（production code）過於龐大，認為再寫測試碼（test code）是浪費時間的事情

### TDD 測試開發流程
TDD 開發流程是一種 `red-green-refactor` 循環，透過循環流程來進行開發：
- Red：紅燈階段，先撰寫測試程式，並執行測是使之進入測試失敗。
- Green：快速開發功能實作，目的在於達成測試，使測試成功。
- Refactor：重構實作功能的程式碼，並使程式碼持續通過測試。

### TDD 建議
- 單次循環內只針對一項測試條件（情境）。
- 測試時只求實作功能部分，不要連擴充功能也做。
- 測試條件要考慮邊際案例（edge case）。

### TDD 議題
- 如何有效安全的重構程式碼？
- 測試程式碼的品質、可讀性、擴充性與產品程式碼是否也同樣重要？

## BDD
行為驅動開發（Behavior Driven Development），是一種基於測試驅動開發（TDD，Test-Driven Development）概念的開發方式，除了在開發程式前就要先撰寫測試程式碼之外，再撰寫測試程式碼前更要先撰寫測試規格書。而目前也有許多針對 BDD 開發方式的輔助工具。


# 測試庫相關用法

## Mocha.js
```javascript
describe('測試環境說明', () => {
    it('測試案例說明', () => {
      // 寫入測試判斷
    })
})
```

### Mocha.js 用法
- describe()：描述測試環境。
- it()：描述測試案例（Test Case）。
- before()：測試前先執行這個區塊內容。
- after()：測試後先執行這個區塊內容。
- beforeEach()：每個測試案例（Test Case）開始前會執行。
- afterEach()：每個測試案例（Test Case）結束後會執行。


## Chai.js
- 三種風格：Should、Expect、Assert

### Chai.js 風格
- Should
```javascript
chai.should();

something.should.be.a('string');
something.should.equal('bar');
```

- Expect
```javascript
var expect = chai.expect;

expect(something).to.be.a('string');
expect(something).to.equal('bar');
```

- Assert
```javascript
var assert = chai.assert;

assert.typeOf(something, 'string');
assert.equal(something, 'bar')
```
### Chai.js assert 用法
- assert(判斷表達式, 報錯時的提醒)
```javascript
assert("1" !== 1, 'JavaScript is crazy.')
```

- assert.fail(報錯時的提醒);
```javascript
// assert(判斷表達式, 報錯時的提醒)
var isShawnHandsome;
// ...
if (!isShawnHandsome) {
  assert.fail('You are a liar.')
}
```

## Sinon.js
Sinon.js 是一個 **協助測試** 的 JavaScript 函式庫，主要針對撰寫單元測試中有時會出現較為複雜的測試情境，例如函式中包含了 **異步請求**、**setTimeout()** 或需要向伺服器請求資源的情況。我們可以透過 Sinon.js 內的 **測試替身** 將上述提及的部分，替換成較容易測試的程式碼，藉此來回歸專注在測試這件事情上。

### Sinon.js 測試替身
Sinon.js 一共有三種測試替身類型：
- Spies：提供使用函式的情況，不改變函式本身的行為。
- Stubs：提供使用函式的情況，但改變函式本身的行為，可以使函式返回任意值。
- Mocks：組合 `Spice` 和 `Stubs`。
另外也提供了一些方法：
- Faking time：穿越時空，針對特定時間來操控如 `setTimeout()` 等函式。
- Fake XMLHttpRequest：偽造 AJAX 請求與回應。
- Fake server：偽裝伺服器，直接模擬 API 回應。

#### Sinon.js 測試替身使用時機
測試替身使用時機牽扯到函數的類型，根據副作用（side effect）可劃分為：
- 無副作用的函數（Pure function）
- 有副作用的函數（Impure function）

**無副作用的函式（Pure function）**
當函式使用顯式（Explicit）方式從傳送參數獲取資料，並且函式都通過回傳值輸出資料給外部：

無副作用的函式範例：
```javascript
function add(a,b) {
    let result = a + b
    return result
}

add(1,2) // 函式只利用了傳送參數 a, b 進行運算，且輸出的更動有透過回傳值傳出。
```
**有副作用的函式（Impure function）**
當函式使用隱式（Implicit）方式從外部獲取資料，或是輸出資料給外部，使用函式時無法得知內部有無更動到外部的情況。

有副作用的函式範例：
```javascript
let userName = 'ShawnL'
function getMemberData() {
    fetch('/memberlist/' + userName)
        .then(res => res.json())
        .then(res => res.userData)
}

getMemberData() // 使用時不知道它裡面有取到外部變數 userName 的值
```

從上面兩個範例中可以看出，針對無副作用的函式測試，我們掌握好輸入與輸出的資訊即可；然而要在有副作用的函式中撰寫測試，就會需要對於未定義在函式內變數小心控制，因此我們需要使用測試替身（test double）來代替他們形成穩定的輸出值。

另一個會使用測試替身的時機，則是有會使整個測試流程變長的效果時（例如有程式需要每隔 5 分鐘執行一次），我們也可以透過測試替身來協助測試。

#### Sinon.js Spies
Spies 功能主要收集函式的相關資訊，好比返回函式使用次數的 `spy.callCount()`方法或該函式是否有被使用可透過 `spy.called()` 來檢查。

範例：
```javascript
let sinon = require('sinon')

let user = {
    setName = function(name) {
        this.name = name
    }
}

let setNameSpy = sinon.spy(user,'setName')

user.setName('ShawnL')

console.log(setNameSpy.callCount)   // 1
console.log(setNameSpy.called)      // ture

setNameSpy.restore()                // 移除 spy，以避免不可預期之結果發生
```

#### Sinon.js Stubs
Stubs 功能主要同樣也是收集函式的相關資訊，擁有與 `Spies` 一樣的 API，但差別在於 `Stubs` 最終會改變函式最後返回的。常用的情境有：
- 使用異步呼叫的函式
- 傳送同個參數的情況下，函式會有機會返回不同的結果：
- 測試異常狀況，例如嘗試捕捉錯誤資訊。


## Travis CI
針對 GitHub 專案提供持續整合（Continuous Integration）服務的平台。
- [官網連結](https://travis-ci.org/)

### .travis.yml setting
在專案根目錄建立 `.travis.yml` 檔案，設定相關資訊：

```yml
language: node_js
node_js:
    - "8"
```

### Package.json setting
Travis CI 會根據 `npm test` 內容進行測試，所以我們需要將設定單元測試的執行碼放入 package.json 中的 test scripts 中，並且 push 上述兩個 setting 至專案中：

```yml
"scripts": {
        "test": "mocha"
}
```

------

# 參考資源
**article**
- [一次搞懂單元測試、整合測試、端對端測試之間的差異](https://blog.miniasp.com/post/2019/02/18/Unit-testing-Integration-testing-e2e-testing)
- [Continuous integration wiki](https://zh.wikipedia.org/wiki/%E6%8C%81%E7%BA%8C%E6%95%B4%E5%90%88)
- [Test Double（2）：五種替身簡介](http://teddy-chen-tw.blogspot.com/2014/09/test-double2.html)
- [用 mocha 做單元測試並整合 Travis-CI](https://larrylu.blog/nodejs-mocha-travis-ci-unit-test-e859a9446e16)
**slide**
- [測試是什麼](https://www.slideshare.net/yvonne_yu/ss-51379324)
- [Front-End Testing: Demystified](https://www.slideshare.net/sethmcl/testing-web-apps-33612391)
