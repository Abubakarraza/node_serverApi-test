const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/test").
    then(() => console.log("connection is successfull in db"))
    .catch((err) => console.log(err));