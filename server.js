const express = require("express");
const app = express();
require("dotenv").config;
const cors = require('cors');
const userRoutes = require('./Routes/User.Route');
const {UserModel} = require('./Models/User.model')


const {connection} = require("./db.js");
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

app.get("/", async(req, res)=>{
    res.send("Homepage")
});
app.post("/user",async(req, res)=>{
    const { name, level, score } = req.body;
    console.log(name, level, score)
    
        const user = new UserModel({name, level, score})
        user.save();
        return res.send("Your score has been added!");
   
});


app.get('/users', async (req, res)=>{
    const users = await UserModel.find();
    res.send(users);
})
// app.use("/user", userRoutes);




app.listen(PORT, async()=>{
    try{
         await connection;
        console.log("connected to db successfully");
    }catch(err)
    {
        console.log(err)
    }
    console.log("server is started on 8000");
})