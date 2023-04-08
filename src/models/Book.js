import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    
    {
        id: {type: String},
        title: {type: String, require: true},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', require: true},
        pagesNumber: {type: Number},
        publishingCompany: {type: String, require: true},
    }
    
);

const books = mongoose.model('Books', bookSchema)

export default books

