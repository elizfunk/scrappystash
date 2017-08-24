'use strict';

const fs = require('fs');
const express = require('express');
const app = express();



const { PORT, 
        ENV
      } = JSON.parse(fs.readFileSync('./server/app-variables.json'));

app.use(express.static('./public/'));

// app.get('/', function(req, res){
//   res.send('hello world');
// });

app.listen(PORT);
console.log(`listening on port ${PORT}; ${ENV} environment`);