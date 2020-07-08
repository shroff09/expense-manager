const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/router");
const app = express();
const PORT = 3001;

const url = "mongodb+srv://ankit:<password>@cluster0.wpybt.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.on('error',console.error.bind(console,'connection error:'));
mongoose.connection.once('open',()=>{
    console.log(`database is connected succesfully`);
});
  
app.use(express.json());
app.use('/api/v1/expense',route);
 

app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`));
