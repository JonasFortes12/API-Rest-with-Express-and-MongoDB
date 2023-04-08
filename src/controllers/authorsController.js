import authors from "../models/Author.js"

class AuthorController {

    static getAllAuthors = async (req, res) =>{        
        try {
            res.status(200).json(await authors.find())
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }
    
    static getAuthorById = async (req, res) => {
        const id = req.params.id
        try {
            res.status(200).send(await authors.findById(id))
        } catch (err) {
            res.status(400).send({message: `${err.message} - Author don´t located by ID!`})
        }

    }

    static registerAuthor = async (req, res) => {
        let newAuthor = new authors(req.body);
        
        try {
            await newAuthor.save();
            res.status(201).send(newAuthor.toJSON());
        } catch (err) {
            res.status(500).send({message: `${err.message} - Error registering new author`});
        }

    }

    static updateAuthor = async (req, res) => {
        const id = req.params.id

        try {
            await authors.findByIdAndUpdate(id, {$set: req.body}) //updating the title
            res.status(200).send({message: 'Author Updated!'})
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static deleteAuthor = async (req, res) =>{
        const id = req.params.id
        try {
            await authors.findByIdAndDelete(id)
            res.send(`Remove author successfuly!`)
        } catch (error) {
            res.send(`Remotion author failed!`)
        }
    }


}


export default AuthorController