const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

//routers
const roleRouter = require("./routes/roles");
const permissionRouter = require("./routes/permission");

const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

const userRouter = require("./routes/user");
const booksRouter = require("./routes/books");
const listReadingRouter = require("./routes/listReading");

const roomsRouter = require("./routes/rooms");
const commentsRouter = require("./routes/comment");


const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

// router middleware
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.use("/role", roleRouter);
app.use("/permission", permissionRouter);

app.use("/user", userRouter);
app.use("/books", booksRouter);
app.use("/raedinglist", listReadingRouter);


app.use("/rooms", roomsRouter);
app.use("/comments", commentsRouter);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
