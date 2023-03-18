import express from "express"

const app = express()

const books = [
    {id: 1, "title" : "Quincas Borba"},
    {id: 2, "title" : "The death of Ivan Ilitch"}

]


app.get('/', (req, res) =>{
    res.status(200).send('Library Universal')
})

app.get('/books', (req, res) => {

    res.status(200).json(books)

})

export default app
