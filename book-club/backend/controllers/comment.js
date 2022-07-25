const connection = require("../models/db");


const createNewComment = ()=>{
    const { comment , room_id } = req.body;
    const user_id = req.params.id
    const query = `INSERT INTO books (
      Book_Name,
      img,
      description) VALUES (?,?,?,?,?,?);`;
    const data = [comment, room_id, user_id];
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
        massage: "comment created",
        result: result,
      });
    });
}


module.exports = {
    createNewComment,
  };
  