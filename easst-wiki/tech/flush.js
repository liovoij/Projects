const path = require('path')
const fs = require('fs')
const os = require('os')
const readline = require('readline')

const global = require('./global.js')
const sidebarMap = global.sidebarMap;

const FlushSummary = {
  base: path.join(__dirname, '/docs/'),
  filePath: '/docs/',
  fWrite: fs.createWriteStream(path.join(__dirname, '/SUMMARY.md')),
  lineSummary: function(prefix, name, append){
    return prefix + '* [' + name + '](' + this.filePath + append + ')\n';
  },
  writefile : function(data, append){ 
    if(append){
       this.fWrite.write(data + os.EOL)
    } else {
        this.fWrite.write(data)
    }
  },
  getNext: function(){
    if(jsynchronized("handIn")){
        return this.next
    }
  },
  addNext:  function(){
    if(jsynchronized("handIn")){
        this.next ++
    }
  },
  readFile : function(item, callback){
    var root = true;
    const _this = this;
    var fName = item.dirname + '.md';
      if(item.dirname == '/'){
        fName = 'README.md';
    }
    var rl = readline.createInterface({
        input: fs.createReadStream(_this.base + fName)
    });
    const arr = [];
    rl.on('line',function (line) {
      if(root){
        arr.push(_this.lineSummary('', item.title, fName));
        root = false
      }
      if(line.indexOf("###") > -1){
      } else if(line.indexOf("##") == 0){
        const ll = line.replace(/\s+/g,"").substring(2);
        arr.push(_this.lineSummary('\t', ll, fName + '#' + ll));
      } 
    });
    rl.on('close',function () {
        console.log("over ...")
        _this.writefile(arr.join(''), true)
        callback()
    });
  },
  iterator: function(index){
    if(index < sidebarMap.length){
        this.readFile(sidebarMap[index], () => this.iterator(++ index))
    }
  },
  flush: function(){
    this.writefile("* [引言](README.md)\n", false)
    this.iterator(0);
  }
}
FlushSummary.flush();
