const mongoose = require('mongoose');

// const mongoURI = 'mongodb://127.0.0.1:27017/task-manager';
// const options = {
//     useNewUrlParser:true,
//     useUnifiedTopologu:true,
// };

mongoose.connect('mongodb://127.0.0.1:27017/task-manager')
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log("Error connecting to mongoDB:",err);
});