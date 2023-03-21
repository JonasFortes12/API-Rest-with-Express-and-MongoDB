import books from "../models/Book.js";

class BookController {

    static getAllBooks = async (req, res) =>{
        res.status(200).json(await books.find())
    }

}


export default BookController