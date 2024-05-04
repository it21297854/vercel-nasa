const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const UserModel = require('./models/User')
app.use(express.json())
app.use(cors())

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://admin:admin@mern-vercel.gojdeyt.mongodb.net/?retryWrites=true&w=majority&appName=mern-vercel',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
app.post('/register', (req, res) => {
  UserModel,
    UserModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('Success')
      } else {
        res.json('the password is incorrect')
      }
    } else {
      res.json('No Record exists')
    }
  })
})

const db = mongoose.connection
app.get('/', (req, res) => {
  res.json('Hello')
})
// Check MongoDB connection
db.on('error', (error) => {
  console.error('MongoDB connection error:', error)
})

db.once('open', () => {
  console.log('Connected to MongoDB')
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
