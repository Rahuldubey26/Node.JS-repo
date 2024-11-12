//This is Node-js Multer
const path=require('path');
const express=require("express");
const app=express();
const PORT=8000;

app.set("view engine","ejs");
app.set("views",path.relative('/views'));

app.use(express.json());

app.get('/',(req,res)=>{
    return res.render("homepage");
});


app.listen(PORT,()=>{
    console.log(`Server Startd at a PORT:8000`)
});