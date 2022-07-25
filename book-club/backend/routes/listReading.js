const express = require("express");
const authentication = require("../middlewares/authentication");

const {
  viewList,
  addToList,
  removefromList,
  emptyAllReadingList  
} = require("../controllers/readinglist");

const listReadingRouter = express.Router();

listReadingRouter.post("/:id", authentication, addToList);
listReadingRouter.get("/", authentication, viewList);
listReadingRouter.put("/:id", authentication, removefromList);
listReadingRouter.delete("/",authentication,  emptyAllReadingList);
module.exports = listReadingRouter;
