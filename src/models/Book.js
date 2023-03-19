import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    
    {
        id: {type: String},
        title: {type: String, require: true},
        author: {type: String, require: true},
        pagesNumber: {type: Number},
        publishingCompany: {type: String, require: true},
    }
    
);

const books = mongoose.model('Books', bookSchema)

export default books

