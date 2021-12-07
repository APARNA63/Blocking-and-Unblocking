// const inputTxt = fs.readFilesync('./info.txt','utf-8')
const fs = require('fs')
fs.readFile('./info.txt','utf-8', (err,data)=>{
    console.log(data)
    // const newtxt = info.txt
    fs.writeFile('./newfile.txt', `${data}`,'utf-8',(err,data)=>{
        console.log(data)
    })
})