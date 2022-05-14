const express = require('express')
const app = express()
const port = 3000
const connection=require('./config')
var cors = require('cors')

app.use(cors())
app.use(express.urlencoded())
app.use(express.json());

app.get('/', (req, res) => {
    connection.query("SELECT * FROM name",(error,results)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).json(results)
        }
    })
  })

  app.post('/', (req, res) => {
    const firstname=req.body
    connection.query(`INSERT INTO name SET?`, firstname,(err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.export=app
