const express=require("express");
const app=express();
const port=process.env.port || 3000
const path=require("path");
const hbs=require("hbs")
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}));
app.use(express.static(mypublic));
app.set("view engine","hbs")
hbs.registerPartials(mypartials);
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu123@mangement.4fzmmsn.mongodb.net/');
}
const kittySchema = new mongoose.Schema({
    fullname: String
  });
const Kitten = mongoose.model('Kitten', kittySchema);

app.get("/",(req,res)=>{

res.render("index")

})
app.get("/teachersign",(req,res)=>{

res.render("teachersign")


})
app.get("/teachersignup",(req,res)=>{
res.render("teachersignup")
})
app.post("/teachersignup",(req,res)=>{

const silence = new Kitten({ 
  fullname:req.body.fullname


});
silence.save()
 console.log("data added")

})
app.listen(port,(req,res)=>{

console.log("Running on Port 3000")



})