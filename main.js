/** 適当なファイルを生成するだけのNode.jsプログラム */

const fs = require('fs')
// 書き込むテキスト
const text = new Date().toLocaleString()
// 保存
fs.writeFile("text.txt", text, (err) => {
    if (err) {
        console.log("えらー")
    }
})