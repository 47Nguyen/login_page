const express = require('express')
const app = express()
const port = 3000
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

const user = new User({
    username: "s39756",
    email: "jeff@gmail.com",
    Password: "dorky12345"
})


user.save()
.then(() => console.log("info save"))
.catch((error) => console.log(error.message))

