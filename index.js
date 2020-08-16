#!/usr/bin/env node

const fs = require('fs');
const { error } = require('console');
const { SSL_OP_NO_TLSv1_2 } = require('constants');

var index = `

html
  head
    title
  body
    h1
    
`


var express = `
//npm init
//npm i express pug

const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine' , ' pug');


app.use(bodyParser);

app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Perfect');
    }
});

`

const obj = [
    'server.js',
    'index.pug'
]

fs.mkdirSync('express', err => {
    if(err){
        console.log(err)
    }else{
        console.log('Bun')
    }
});


fs.access('express' , err => {
    if(err){
        console.log(err)
    }else{
        console.log('Bun')
    }
});


for (var i=0 ; i < 2; i++){

    var apk = obj[i];

    var code;

    switch(i){
        case 0:
            code = express;
            break;
        case 1:
            code = index;
            break
    };

    fs.writeFile('express/' + apk,code, err => {
        if(err){
            console.log(err)
        }else{
            console.log('Bun')
        }
    });
}