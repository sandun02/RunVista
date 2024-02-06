const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://sandunnayanajith1999:sandun@cluster0.qwpjopq.mongodb.net/runvista', {useUnifiedTopology: true , useNewUrlParser:true})

    const connection = mongoose.connection

    connection.on('connected' , () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () =>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose