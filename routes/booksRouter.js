import { Router } from "express"
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/booksController.js"

const router = new Router()

// Get all books
router.get('/', getAllBooks)

// Get Book by id
router.get('/:id', getBookById)

// Create Book
router.post('/', createBook)

// Update Book by id
router.put('/:id', updateBookById)

// Deleye Book by id
router.delete('/:id', deleteBookById)

export default router