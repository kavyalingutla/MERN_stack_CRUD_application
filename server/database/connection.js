const mongoose = require("mongoose");


const DB = "mongodb+srv://Kavyalingutla:Lkavs98483@cluster0.hdp80rq.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));