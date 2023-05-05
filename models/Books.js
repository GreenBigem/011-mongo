import mongoose from "mongoose"

const BooksSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    authors: {
      type: String,
    },
    favorite: {
      type: String,
    },
    fileCover: {
      type: String,
    },
    fileName: {
      type: String,
    }
  }
)

export default mongoose.model('Books', BooksSchema)