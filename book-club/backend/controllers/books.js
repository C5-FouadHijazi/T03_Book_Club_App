const connection = require("../models/db");

const createNewBook = (req, res) => {
  const { Book_Name, img, description } = req.body;
  const userId = req.token.userId
  
  const query = `INSERT INTO books ( Book_Name, img, description) VALUES (?,?,?);`;
  const data = [Book_Name, img, description ,userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      massage: "Book created",
      result: result,
    });
  });
};

const getAllBook = (req, res) => {
  const query = `SELECT * FROM books WHERE is_deleted=0`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        massage: "All the product",
        result: { result, page_number: page },
      });
    }
})
}    

const deleteBookId = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE books SET is_deleted=1 WHERE id=?;`;
  const data = [id];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(404).json({ err });
    }
    if (!result.changedRows) {
      return res.status(404).json({
        success: false,
        massage: `!! No product deleted`,
      });
    }
    return res.status(200).json({
      success: true,
      massage: `deleted product`,
      result: result,
    });
  });
};



module.exports = {
  createNewBook,
  getAllBook,
  deleteBookId,
 };
