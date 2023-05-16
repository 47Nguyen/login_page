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
    Full_name: String,
    username: {
        type: String,
        unique: true
    },
    address: String,
    Phone_Number: Number,
    email: String ,
    password: String,
    profileImagePath: String
})

const shipperSchema = new mongoose.Schema({
    Full_name: String,
    email: String,
    username: {
        type: String,
        unique: true
    },
    address: String,
    Phone_Number: Number,
    password: String,
    Role: {
        type: String,
        default: "Shipper"
    },
    Hub: String,
    profileImagePath: String
})
const vendorSchema = new mongoose.Schema({
    email: String,
    username: String,
    national_id: Number,
    Phone_Number: Number,
    Business_name: String, 
    baddress: String, 
    password: String
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

app.post('/login',  async(req,res) => {
    try {
        const check =await User.findOne({username: req.body.username})
        if(check.password === req.body.password){
            res.send("Username and password is correct")
        }
        else{
            res.render("login_wrongpass.ejs")
        }

    }
    catch{
        res.send("Wrong info")
    }
})

app.post('/login_wrongpass',async (req,res)=>{
    try {
        const check = await User.findOne({username: req.body.username})
        if(check.password === req.body.password){
            res.send("Username and password is correct")
        }
        else{
            res.render("login_wrongpass.ejs")
        }

    }
    catch{
        res.send("Wrong info")
    }
})


app.post('/register', async (req, res) => {
    const { username, address, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
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
  
app.post('/register', (req, res) =>{
  const register_info = req.body
  console.log(register_info)
  if (register_info.action === "Customer"){
      console.log(true)
      const user = new User({
          username: register_info.username,
          address: register_info.address,
          email: register_info.email,
          Phone_number : register_info.phone,
          password: register_info.password
      }) 
      user.save()
      .then(() => console.log("User information saved"))
      .catch((error) => console.log(error.message))
      response.redirect("/")
  }
  else if (register_info.action === "Shipper"){
      const shipper = new Shipper({
          Full_name: register_info.Full_name, 
          email: register_info.email, username: register_info.username, 
          address: register_info.address, 
          Phone_Number: register_info.phone,
          Password: register_info.password, 
          Hub: hub
          })
   shipper.save()
    .then(() => console.log("Shipper saved"))
    .catch((error) => console.log(error.message))
    res.redirect("/login")
  }
  
  else {
     const vendor = new Vendor({
      Full_name: register_info.Full_name, 
      email: register_info.email, 
      username: register_info.username,
      address: register_info.address, 
      Phone_Number: register_info.phone,
      Password: register_info.password,
      Business_name: register_info.business, 
      baddress: register_info.baddress, 
      national_id: register_info.National_id})
    vendor.save()
    .then(() => console.log("Vendor saved"))
    .catch((error) => console.log(error.message))
    res.redirect("/login")
  } 
  
    
})


// Get Method
app.get('/login', (req, res) =>{
    res.render('login.ejs')
})
app.get('/login-wrong', (req, res) =>{
    res.render('login_wrongpass.ejs')
})


app.get('/parent', (req, res) =>{
    res.render('parentpage.ejs')
})

app.get('/register', (req, res) =>{
    res.render('register.ejs')
}) 

 


app.listen(port, ()=> {
    console.log("Port Working")
})



