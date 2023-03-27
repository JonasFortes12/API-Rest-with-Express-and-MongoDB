import express from "express"
import db from "./config/dbConnect.js"
import books from "./models/Book.js"
import routes from "./routes/index.js"

//DB events listeners:
db.on("error", () => {
    console.log.bind(console, 'Erro de conexão')
})
db.once("open", () =>{
    console.log('BD connection made successfuly!')
})

const app = express()
app.use(express.json())

routes(app);


// The routes under will be moved to yours respectives routes files: 

app.get('/books/:id', (req, res) => {
    let index = getBookId(req.params.id)
    res.status(200).json(books[index])
    // res.status(200).json(books[req.params.id - 1])
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
