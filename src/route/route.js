const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers.js')
const userControllers = require('../controllers/userControllers.js')
const reviewControllers = require('../controllers/reviewControllers.js')


router.post('/register', userControllers.createUser)

router.post('/login', userControllers.userLogin)

router.post('/books', bookControllers.createBook)

router.get('/books', bookControllers.getBooks)

router.get('/books/:bookId', bookControllers.getBookWithReviews)

router.put('/books/:bookId', bookControllers.updateBook)

router.delete('/books/:bookId', bookControllers.deleteBook)

router.post('/books/:bookId/review', reviewControllers.addReview )








module.exports = router
