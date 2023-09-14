const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./Routes/auth')
const cookieParser = require('cookie-parser')

const app = express();

const uri = "mongodb+srv://deveshduptala:m5yTenus@recipeappcluster.8qnaxz0.mongodb.net/?retryWrites=true&w=majority"
// using async function to connect to mongo db
async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error(err)
    }
}
// calling the function
connect();

app.use(cors({
    origin: ["http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use('/auth', userRouter)

app.listen(3001, () => {
    console.log("Server started!")
})