const mongoose = require('mongoose')
const bookSchema = mongoose.Schema(
    {
        title:{
            type : String,
            required : [true, "please enter title"]
        },
        author:{
            type: String,
            unique: true,
            required : [true, "please enter author"]
        }
    },
    {
        timestamps : true
    }
)
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
