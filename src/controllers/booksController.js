import books from "../models/Book.js";

class BookController {

    static getAllBooks = async (req, res) =>{        
        try {
            res.status(200).json(
                await books.find()
                .populate('author')
                .exec()
            )
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }
    
    static getBookById = async (req, res) => {
        const id = req.params.id
        try {
            res.status(200).send(
                await books.findById(id)
                .populate('author', 'name')
                .exec()
            )
        } catch (err) {
            res.status(400).send({message: `${err.message} - Book don´t located by ID!`})
        }

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

    static updateBook = async (req, res) => {
        const id = req.params.id

        try {
            await books.findByIdAndUpdate(id, {$set: req.body}) //updating the title
            res.status(200).send({message: 'Book Updated!'})
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static deleteBook = async (req, res) =>{
        const id = req.params.id
        try {
            await books.findByIdAndDelete(id)
            res.send(`Remove book successfuly!`)
        } catch (error) {
            res.send(`Remotion book failed!`)
        }
    }


}


export default BookController