import express from 'express';
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static('./dist'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('index.html') //Server gibt bei aufruf von "/" index.html aus.
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/api/customer',[],(req, res)=> {
  res.send('post Request was successful, data being saved');

 let name =  Object.entries(req.body)[0].slice(-1)[0].name
  function FileWriter(){
   let filePath = __dirname + '/dataBase/data.json'
   let myDataObject =  req.body
    fs.readFile(filePath, 'utf-8', function readFileCallback(err,data){
      if(err){
        console.log(err)
      } else {
        let newObject = JSON.parse(data)
        newObject.customers.push(myDataObject)
        fs.writeFile(filePath ,  JSON.stringify(newObject), 'utf-8', (err) => {
          if(err){
            console.log(err)
          }
        })
      }
    })
  }
  FileWriter()
})
