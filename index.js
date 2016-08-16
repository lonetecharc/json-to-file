console.log('Hello World');

var fs=require('fs');

fs.readFile('abs.txt',function(err,val){
  if(err){
    throw err;
  }
  console.log(val);
})
