import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import booksRouter from './routes/booksRouter.js'

const app = express()

// Constants

const PORT = 3001
const DB_FULL_URL = 'mongodb://127.0.0.1:27017/books'

// Middleware

app.use(cors())
app.use(express.json())

// Routes

app.use('/api/books', booksRouter)

// Functions

async function start() {
    try {
        await mongoose.connect(
            `${DB_FULL_URL}`, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        }
        )

        console.log('Mongo connected!');

        app.listen(PORT, () => {
            console.log(`Server Started on PORT: ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start()