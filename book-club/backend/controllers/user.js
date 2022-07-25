const connection = require("../models/db");

const getAllUsers = (req, res) => {
  const query = `SELECT id,userName,email,password, is_deleted  FROM users WHERE Role_id =1 ;`;

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server error",
        err: error.message,
      });
    } else {
      return res.status(200).json({
        success: true,
        massage: `All users `,
        result: result,
      });
    }
  });
};

module.exports = {
  getAllUsers
};
