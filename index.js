const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

const { default: mongoose } = require('mongoose')
mongoose.connect('mongodb+srv://trungluong0806:Lacussaber080699@cluster0.w8zcmxn.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.log(error.message)); 

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    Password: String
})

const User = mongoose.model('User', userSchema)

//Post Method
app.post('/register', (req, res) =>{
    console.log("Date received from POST form")
    console.log(`Email: ${req.body.email}`)
    console.log(`Username: ${req.body.username}`)
    console.log(`Password: ${req.body.password}`)
    res.send("Post form submitted")
})



// Get Method
app.get('/login', (req, res) =>{
    res.render('login.ejs')
})

app.get('/shipper', (req, res) =>{
    res.render('shipper.ejs')
})
app.get('/parent', (req, res) =>{
    res.render('parentpage.ejs')
})
app.get('/vendor', (req, res) =>{
    res.render('vendor.ejs')
})

app.get('/register', (req, res) =>{
    res.render('register.ejs')
})








/*
user.save()
.then(() => console.log("info save"))
.catch((error) => console.log(error.message))
*/ 

app.listen(port, ()=> {
    console.log("Port Working")
})
