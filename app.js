import express from 'express';
import bodyParser from "body-parser";
import fs from "fs";
import e from "express";
const app = express();
const port = 3000;
const filePath = 'C:\\Users\\SS\\PhpstormProjects\\schulprojektcam\\dataBase\\data.json';
app.use(express.static('./dist'))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.post('/api/customer',[],(req, res)=> {
  res.send('post Request was successful, data being saved');

 let name =  Object.entries(req.body)[0].slice(-1)[0].name

  function FileWriter(){
   let myDataObject =  req.body
    fs.readFile(filePath, 'utf-8', function readFileCallback(err,data){
      if(err){
        console.log(err)
      } else {

        let newObject = JSON.parse(data)
        console.log(newObject)
        newObject.customers.push(myDataObject)

        fs.writeFile(filePath ,  JSON.stringify(newObject), 'utf-8', (err) => {
          if(err){
            console.log(err)
          }
          console.log('data written to file')
        })
      }
    })
  }
  FileWriter()




})
