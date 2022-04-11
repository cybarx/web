//import express from 'express';//es6
//import path from 'path';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { MongoClient, ServerApiVersion } from 'mongodb';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.join(__dirname, '.')));//set static directory
//linking Database-start
const uri = "mongodb+srv://cybarxuser1:cybarxuser1@cybarxcluster.j4oqk.mongodb.net/cbxSubmissionsDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
//linking Database-End
app.get("/",(req,res)=>{
    //handle home route 
    res.sendFile('index.html',{root:'.'});
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`)//debug log 
});