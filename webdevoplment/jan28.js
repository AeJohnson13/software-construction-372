const fs = require('fs') 
const http = require('http') 
const url = require('url')

//file read
http.createServer((req, res) => { 
  fs.readFile('./aHtmlFile.html', (err2, data2) => { 
    res.writeHead(200, {'Content-Type': 'text/html'}) 
    res.write(data2);
  }); 
  fs.readFile('./myText.txt', (err, data) => { 
   if(err) {
      console.log(err);
    } 
    else {  
      console.log('in server');
      console.log(data.toString());
      //console.log(req);
      clientData = url.parse(req.url);;
      console.log(clientData.search);
      if(clientData.search != null){
        //todo: search logic here
        searchResult = clientData.search
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(searchResult);
        } 
      } 

  });
}).listen(10000);
console.log('Outside code exectutes first, as it doesn\'t have to wait for reaFile to complete')

fs.writeFile('./myText2.txt', 'Hi. this my node text file', (err, data) => { 
  console.log('written data');
 }); 

//file write

