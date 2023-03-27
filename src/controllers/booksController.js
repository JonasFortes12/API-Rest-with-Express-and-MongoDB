import books from "../models/Book.js";

class BookController {

    static getAllBooks = async (req, res) =>{
        res.status(200).json(await books.find())
    }

    static registerBook = async (req, res) => {
        let newBook = new books(req.body);
        
        try {
            await newBook.save();
            res.status(201).send(newBook.toJSON());
        } catch (err) {
            res.status(500).send({message: `${err.message} - Error registering new book`});
        }

    }

}


export default BookController