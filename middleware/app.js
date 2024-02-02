const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
    throw new ExpressError(401,"Access Denied!");
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

app.use("/err",(req,res) => {
    abcd = abcd;
})


app.get("/admin",(req,res) => {
    throw new ExpressError(403,"Access to admin is forbidden");
})




// Error Handerler
app.use((err,req,res,next) => {
   let {status=500, message="SOME ERROR OCCURED" } = err;
   res.status(status).send(message);
})


app.listen(8080, () => {
    console.log("Server listening to port 8080.");
});