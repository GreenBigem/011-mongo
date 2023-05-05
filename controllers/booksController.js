import Books from '../models/Books.js';

// Get all books

export const getAllBooks = async (req, res) => {
  try {

    const books = await Books.find()

    if (!books) {
      res.json({ message: "Книг нет." })
    } else (
      res.json({ books })
    )
  } catch (error) {
    console.log(error);
  }
}


// Get Book by id

export const getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.id)
    if (book) {
      res.json({ book })
    } else (
      res.status(404).json({ message: "Такой книги нет." })
    )
  } catch (error) {
    console.log(error);
    res.json({ error })
  }
}

// Create Book

export const createBook = async (req, res) => {
  try {
    const { id, title, description, authors, favorite, fileCover, fileName } = req.body

    const newBook = new Books({
      id, title, description, authors, favorite, fileCover, fileName
    })

    await newBook.save()

    res.json({ newBook, message: 'Новая книга создана.' })

  } catch (error) {
    console.log(error);
    res.json({ error })
  }
}

// Update Book by id

export const updateBookById = async (req, res) => {
  try {
    const { data } = req.body
    const id = req.params.id

    const updatedBook = await Books.findOneAndUpdate(id, data, { returnNewDocument: true })
    if(updatedBook) {
      res.json(updatedBook)
    } else (
      res.status(404)
    )
    

  } catch (error) {
    console.log(error);
    res.json({ message: 'Что-то пошло не так.' })
  }
}

// Delete Book by id

export const deleteBookById = async (req, res) => {
  try {

      const id = req.params.id
      const deletedBook = await Books.deleteOne({ id })
      res.json({ message: 'ok' })

  } catch (error) {
    console.log(error);
    res.json({ message: 'Что-то пошло не так.' })
  }
}