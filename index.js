//import express from 'express';//es6
//import path from 'path';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.join(__dirname, '.')));//set static directory

app.get("/",(req,res)=>{
    //handle home route 
    res.sendFile('index.html',{root:'.'});
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`)//debug log 
});