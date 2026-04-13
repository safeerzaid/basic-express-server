require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/user', (req,res) => {
  let userArray = [{
    name: 'Safeer',
    place: 'malappuram'
  },
  {
    name: 'Ashiq',
    place: 'calicut'
  }]
  res.json({status: true, data: userArray})
})

app.post('/user/like',(req,res) => {
  res.status(200).json({message:'You liked this', Status: true})
})

app.put('/user', (req,res) => {
  res.status(200).json({message: 'user Updated successfully', status:true})
})

app.post('/user', (req,res) => {
  const userData = req.body;
  console.log(userData);
  res.status(201).json({message: 'user created successfully',user: userData, status:true})
})

app.delete('/user', (req,res) => {
  res.json({message: 'user deleted successfully', status:true})
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
})
