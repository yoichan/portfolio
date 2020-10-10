# portfolio

* `ejs + (yaml => json) => index.html`
* npmでインストールしたgulpでコンパイル

## 環境構築
```
$ git clone git@github.com:yoichan/portfolio.git
$ cd portfolio
$ npm install
```

## index.htmlの編集の仕方
```
./ejs/内のファイルと./data/内のファイルを編集
$cd portfolio
$make build
=> index.htmlが生成される
```
