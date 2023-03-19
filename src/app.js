import express from "express"
import db from "./config/dbConnect.js"
import books from "./models/Book.js"

//DB events listeners:
db.on("error", () => {
    console.log.bind(console, 'Erro de conexão')
})
db.once("open", () =>{
    console.log('BD connection made successfuly!')
})

const app = express()
app.use(express.json())


app.get('/', (req, res) =>{
    res.status(200).send('Library Universal')
})

app.get('/books', async (req, res) => {
    
    res.status(200).json(await books.find())

})

app.get('/books/:id', (req, res) => {
    let index = getBookId(req.params.id)
    res.status(200).json(books[index])
    // res.status(200).json(books[req.params.id - 1])
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('Book added successfully')
})

app.put(`/books/:id`, (req, res) => {
    let index = getBookId(req.params.id)

    books[index].title = req.body.title //updating the title

    res.status(200).json(books)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params
    let index = getBookId(id)
    books.splice(index, 1)
    res.send(`Remove book successfuly!`)

})



function getBookId(reqId){
    return books.findIndex(book => book.id == reqId)
}

export default app
