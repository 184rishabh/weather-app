const express=require('express');
const path=require("path");
const request=require("request");

const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");
app.set("views","views");
app.get('/',(req,res)=>{
    res.render("home.ejs");
})
app.get("/weather/:data",(req,res)=>{
    request(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.data}&appid=ebaa3781472802eb5ddf0a5e3390c261`,(error,response)=>{
        const data=JSON.parse(response.body);
        res.json(data);
        })        
})
app.listen(3000);