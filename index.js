var app   = require("express")();
var fs    = require('fs');
var http  = require("http").Server(app);
var data  = "write data to stream";
// create writable-stream variable
var wStream = fs.createWriteStream('writable-stream.txt');

// write he data to stream need to encoded
wStream.write(data,'UTF8');

// now handle events which caused after writable-stream
wStream.on("error",function(){
  console.log(err.stack);
});

http.listen("3000",function(){
  console.log("server is running: 3000");
});
