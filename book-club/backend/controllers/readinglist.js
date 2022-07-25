const connection = require("../models/db");

//View List
const viewList = (req, res) => {

  const userId = req.token.userId;

  const query = ` SELECT * FROM reading_list WHERE user_id=? AND is_deleted=0  `;
  console.log(userId);
  const data = [userId];

  connection.query(query, data, (err, result) => {
    console.log(result);
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      massage: `Books In List`,
      result: result,
    });
  });
};

//add Book from List depend on the login | token userId
const addToList = (req, res) => {

  const book_id = req.params.id;
  const user_id = req.token.userId;

  const query = `SELECT * FROM Books WHERE id=? `;
  const data = [book_id];

  connection.query(query, data, (err, result) => {
    console.log(result);
    if (!result) {
      return res.status(404).json({
        success: false,
        massage: "Book did'nt found",
      });
    }
    const query2 = `INSERT INTO reading_list (book_id ,user_id) VALUES (?,?)`
    const data2 = [book_id, user_id]

    connection.query(query2, data2, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          massage: "Server error",
          err: err.message,
        });
      }
      return res.status(200).json({
        success: true,
        massage: `Book Added to List`,
        result: result,
      })
    });
  })
}



// Remove Book from List
const removefromList = (req, res) => {
  const user_id = req.token.userId;
  const product_id = req.params.product_id;

  const query = `UPDATE basket SET is_deleted=1 
    WHERE user_id=? AND product_id=?;`;
  const data = [user_id, product_id];
  console.log("data", data);
  connection.query(query, data, (error, result) => {
    console.log(error);
    if (error) {
      return res.status(500).json({
        success: false,
        massage: "Server error",
        err: error.message,
      });
    } else {
      return res.status(200).json({
        success: true,
        massage: `Book removed `,
        result: result,
      });
    }
  });
};


const emptyAllReadingList = (req, res) => {
  const user_id = req.token.userId;
  const query = `UPDATE basket SET is_deleted=1 
    WHERE user_id=?;`;
  const data = [user_id];
  connection.query(query, data, (error, result) => {
    console.log(error);
    if (error) {
      return res.status(500).json({
        success: false,
        massage: "Server error",
        err: error.message,
      });
    } else {
      res.status(200).json({
        success: true,
        massage: `Products removed `,
        result: result,
      });
    }
  });
};

module.exports = {
  viewList,
  addToList,
  removefromList,
  emptyAllReadingList
};
