const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))


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

app.post('/registration-form', (req, res)=>{
    console.log("Login info received");
    console.log(`Username: ${req.body.username}`)
    console.log(`Password: ${req.body.password}`)
    console.log(`Email: ${req.body.email}`)
    res.send("Post form submitted")
})

/*
user.save()
.then(() => console.log("info save"))
.catch((error) => console.log(error.message))
*/ 

app.listen(port, ()=> {
    console.log("Port Working")
})
