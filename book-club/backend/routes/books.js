const express = require("express");

const  authentication  = require("../middlewares/authentication");
const  authorization  = require("../middlewares/authorization");


const { 
    createNewBook,
    getAllBook,
    deleteBookId, } = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.post("/", authentication ,authorization("CREATE_BOOK") ,createNewBook );
booksRouter.get("/", getAllBook );
booksRouter.delete("/", authentication, authorization("DELETE_BOOK"), deleteBookId );



module.exports = booksRouter;
