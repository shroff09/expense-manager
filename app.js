const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;

const url = "";
mongoose.connect("url",{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.Connection.on((err)=>{
    if(err)
    console.log(err);
    console.log("database connected successfully");

})
app.get('/',(req,res) =>{
    res.send('hello');
});

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});