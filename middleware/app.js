const express = require("express");
const app = express();

// app.use( (req,res,next) => {
//     console.log("Hi,I am a Middleware.");
// next();
// })

//logger
// app.use((req,res,next) => {
//     console.log(req.method,req.hostname,req.path);
//     next();
// })


const checkToken = ((req,res,next) => {
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    res.send("Access Denied!");
})

app.get("/api",checkToken,(req,res) => {
    res.send("data");
})



app.get("/",(req,res)=>{
    res.send("Hi, I am Root");
});

app.get("/random",(req,res) => {
    res.send("this is a random page");
})

app.listen(8080, () => {
    console.log("Server listening to port 8080.");
});