
const {readFileSync,writeFileSync}=require('fs')
const path=require('path')
console.log('start')
const first=readFileSync(path.join('./content','first.txt'),'utf8')
const second=readFileSync(path.join('./content','second.txt'),'utf8')
writeFileSync(path.join('./content','result.txt'),`Here is the result ${first} ${second}`,{flag:'a'})
console.log(first,second)