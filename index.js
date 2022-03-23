//import express from 'express';//es6
//import path from 'path';
const express = require('express')
const path = require('path')
var dirname = path.resolve("./");
const staticDir = path.join(dirname, `src`);

const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(staticDir));//set static directory

app.get("/",(req,res)=>{
    //handle home route 
    console.log(req.url);//debug log
    res
        .status(202)
        .sendFile(path.join(`${staticDir}/html/CYBARX- Your security patner.html`))
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)//debug log 
})