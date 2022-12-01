const mongoose = require('mongoose'); //import mongoose b/c we will use mongoose to create a table using javascript code


//instructions to define what a book table will look like
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true,"Setup is required!"],
        minLength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minLength: [3, "Punchline must be at least 3 characters long"]
    }
}, {timestamps:true});




const Joke = mongoose.model("Joke", JokeSchema); //this line registers the table under the table name "Joke" using the instruction from the JokeSchema variable


module.exports = Joke; //export this table so that other files (controller mainly) can import it and work with it