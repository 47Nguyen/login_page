const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

const { default: mongoose, Collection, model } = require('mongoose')
mongoose.connect('mongodb+srv://trungluong0806:Lacussaber080699@cluster0.w8zcmxn.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.log(error.message)); 

const userSchema = new mongoose.Schema({
    username: String,
    address: String,
    email: String ,
    password: String
})

const shipperSchema = new mongoose.Schema({
    email: String,
    username: String,
    address: String,
    Phone_Number: Number,
    Password: String
})
const vendorSchema = new mongoose.Schema({
    email: String,
    username: String,
    national_id: Number,
    Phone_Number: Number,
    Business_name: String, 
    baddress: String, 
    Password: String
})

const User = mongoose.model('User', userSchema)
const Vendor = mongoose.model('Vendor', vendorSchema)
const Shipper = mongoose.model('Shipper', shipperSchema)

//Post Method



app.post('/shipper', (req, res)=>{
    const shipper = new Shipper({
        email: req.body.email,
        username: req.body.username,
        address: req.body.address,
        Phone_Number: req.body.phone,
        Password: req.body.password
    })
    shipper.save()
    .then(() => console.log("Shipper information saved"))
    .catch((error) => console.log(error.message))
    res.redirect("/login")
})


app.post('/vendor', (req, res)=>{
    const vendor = new Vendor({
        email: req.body.username,
        username: req.body.username,
        national_id: req.body.national,
        Phone_Number: req.body.phone,
        Business_name: req.body.business, 
        baddress: req.body.baddress, 
        Password: req.body.password
    })
    vendor.save()
    .then(() => console.log("Vendor information saved"))
    .catch((error) => console.log(error.message))
    res.redirect('/login')
})





// Get Method
app.get('/login', (req, res) =>{
    res.render('login.ejs')
})

app.get('/login-parent', (req, res) =>{
    res.render('login-parent.ejs')
})

app.get('/login-shipper', (req, res) =>{
    res.render('login-shipper.ejs')
})
app.get('/login-vendor', (req, res) =>{
    res.render('login-Vendor.ejs')
})


app.get('/register', (req, res) =>{
    res.render('register.ejs')
})



//Post
app.post('/register', async (req, res) =>{
    const user = new User({
      username,
      address,
      email,
      password
    });

    await user.save();
    console.log('User information saved');
    res.redirect('/login');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error occurred while registering the user');
  }
});

app.post('/login',  async(req,res) => {
    try {
        const check =await User.findOne({username: req.body.username})
        if(check.password === req.body.password){
            res.send("Username and password is correct")
        }
        else{
            res.send("Wrong passowrd")
        }

    }
    catch{
        res.send("Wrong info")
    }
})



app.listen(port, ()=> {
    console.log("Port Working")
})
