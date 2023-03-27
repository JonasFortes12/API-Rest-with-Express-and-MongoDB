import express from "express";
import BookController from "../controllers/booksController.js";

 const router = express.Router();

 router.get("/books", BookController.getAllBooks)
 router.post("/books", BookController.registerBook)

 export default router;

