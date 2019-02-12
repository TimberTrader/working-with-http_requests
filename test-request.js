const request = require('request');
const fs = require('fs');

console.log('Downloading image ...')

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err; 
       })
       .on('response', function (response) {
         console.log(`Response Status Code: ${response.statusCode}\nStatus Message: ${response.statusMessage}\nResponse Headers: ${response.headers['content-type']}`)
       })
       .pipe(fs.createWriteStream('./future.jpg'));

console.log('IMAGE downloaded succesfully!')