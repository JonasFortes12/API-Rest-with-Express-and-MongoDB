import express from "express";
import BookController from "../controllers/booksController.js";

 const router = express.Router();

 router.get("/books", BookController.getAllBooks)
 router.get('/books/search', BookController.getBookByPublishingCompany)
 router.get(`/books/:id`, BookController.getBookById)
 router.post("/books", BookController.registerBook)
 router.put(`/books/:id`, BookController.updateBook)
 router.delete(`/books/:id`, BookController.deleteBook)

 export default router;

