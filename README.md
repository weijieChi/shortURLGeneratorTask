# Short URL website 短網址網站
這個網站作品可以讓使用者輸入一串網址，然後產生短網址。在伺服器啟動期間使用者在瀏覽器輸入 `http://localhost:3000/[隨機字串]` 等已存在伺服器當中的短網址時候，會自動導向原本的原始網址

## Features 網站功能
* 在首頁使用者輸入一串網址後，畫面會回傳一串由 domain/[5 個由隨機字母數字組成的字串] 產生的短網址
* **在伺服器啟動期間**使用者可以在瀏覽器的網址列，輸入你提供的短網址，，瀏覽器就會導向原本的網站
* 短網址輸出格式為 `http://localhost:3000/` 加上 5 碼隨機英文字母數字組合
* 如果使用者要轉換的原始網址已經存在伺服器資料當中，會回傳一樣的短網址
* 使用者在瀏覽器輸入不存在的短網址會導向 404 頁面

## Environment Requirement 環境需求
* 必須已經安裝 Nodejs 執行環境
* git 套件

## Execution 執行方式
**Winsows 執行環境注意事項**
    其專案所在路徑不可以有空白字元 ex: `C:\alpha camp\my folder` 跟含有非英文非 ASCII 字元 ex: `C:\Users\吳柏毅\dev`

## 步驟 Step
1. 先用 git clone 從 github repositories 複製檔案，使用 ssh 協定。
```sh
git clone git@github.com:weijieChi/shortURLGeneratorTask.git
```
2. 進入專案所在目錄
```sh
cd ./shortURLGeneratorTask
```
3. 使用 npm 安裝執行所需的套件。
```sh
npm install
```
4. 透過 npm 執行伺服器程式。
```sh
npm run start
```
5. 在瀏覽器網址列輸入 `http://localhost:3000/` 就可以打開網頁了
6. 最後要關閉伺服器就在 terminal 案 `ctrl` + `C` 再按 `y` + `enter` 關閉 nodejs 伺服器。