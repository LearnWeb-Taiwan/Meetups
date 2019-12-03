# 活動資訊

**第 4 期 ：**<br>
**主題**：喝杯 Mocha 工作坊 <br>
**時間**：12/7 早上 11:00<br>
**場地**：Notch 咖啡工場 站前店 (台北市中正區信陽街6號) <br>
**內容**：以 TDD 開發思維，使用 Mocha.js 來撰寫測試程式碼；並透過 Travis CI 部屬來執行自動化測試。 <br>

# 簡報

## 初入測試
- 什麼是測試？
- 為何需要撰寫測試程式碼？
- 測試的整體概念。
- 如何撰寫測試程式碼？
- 測試程式碼中的挑戰。

## 什麼是測試？
軟體工程中的測試是一種透過測試程式碼來驗證產品程式碼是否可以正確執行，並且能透過測試來達到開發與產出上的效益。
**前端測試與後端測試的差異。**
- 前端：關注在表現層（Presentation Layer），也就是視覺上的呈現（UI Interface）。
- 後端：關注在商業邏輯層（Business Layer）與資料存取層（Database Layer）。


## 為何需要撰寫程式碼
- 檢驗程式碼運作邏輯是否符合預期。
- 加速測試迭代的時間。
- 提升團隊對程式碼的信心。


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
- 釐清測試類型（邏輯、功能、視覺、流程）
- 異步行為中的測試
- 持續整合（CI，Continuous Intergration）測試。

---

# 實作

## 實作須知
- 測試函式庫：
- 測試斷言庫（Assertion）：
- 測試隔離庫：

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
- describe()：
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

## Travis CI

------

# 參考資源
**article**
- [一次搞懂單元測試、整合測試、端對端測試之間的差異](https://blog.miniasp.com/post/2019/02/18/Unit-testing-Integration-testing-e2e-testing)
- [Continuous integration wiki](https://zh.wikipedia.org/wiki/%E6%8C%81%E7%BA%8C%E6%95%B4%E5%90%88)
- [Test Double（2）：五種替身簡介](http://teddy-chen-tw.blogspot.com/2014/09/test-double2.html)
**slide**
- [測試是什麼](https://www.slideshare.net/yvonne_yu/ss-51379324)
- [Front-End Testing: Demystified](https://www.slideshare.net/sethmcl/testing-web-apps-33612391)