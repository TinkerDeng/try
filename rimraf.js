let rimraf = require('rimraf')

/**
 * API
 * rimraf(files，options,callback)  
 * 第一个参数files是glob正则匹配，如果想禁用glob正则匹配，在options设置disableGlob:true
 */

 rimraf("aa",{},function(err,data){
     if(err){
         console.log(11);
         
         console.log(err);
     }
     console.log(data);
 })