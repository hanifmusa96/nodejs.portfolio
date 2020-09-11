const express = require('express')
const app = express()
const port= 3000

//akan bagitahu sistem yang file ejs ada dalam folder "views"
app.set('view engine', 'ejs');
 
app.get('/', (req, res) =>{
  res.render('home')
})

 app.get('/contact',(req,res)=>{
   res.render('contact')
 })
 
app.listen(3000)