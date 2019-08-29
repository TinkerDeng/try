var glob = require("glob")
glob("**/*.js", function (err, files) {
    if(err){}
    console.log(files); 
})
glob("**/*.jsxxxx",function (err, files) {
    if(err){}
    console.log(files); 
})
// 设置 nonull ，如果没有匹配到文件，则flies返回glob规则本身
glob("**/*.jsxxxx",{nonull:true},function (err, files) {
    if(err){}
    console.log(files); 
})
// *默认不包括以.开头的文件,需要设置 {dot:true}
glob("*",{dot:true},function (err, files) {
    if(err){}
    console.log(files); 
})
