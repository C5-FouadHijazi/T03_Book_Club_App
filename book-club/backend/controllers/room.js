const connection = require("../models/db");



const createNewRoom = ()=>{
    const { bookName, img, description } = req.body;
    const query = `INSERT INTO books (
      Book_Name,
      img,
      description) VALUES (?,?,?,?,?,?);`;
    const data = [bookName, img, description];
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
        massage: "book created",
        result: result,
      });
    });
}



const deleteRoomById = ()=>{
    const id = req.params.id;
    const query = `UPDATE rooms SET is_deleted=1 WHERE id=?;`;
    const data = [id];
  
    connection.query(query, data, (err, result) => {
      if (err) {
        res.status(404).json({ err });
      }
      if (!result.changedRows) {
        return res.status(404).json({
          success: false,
          massage: `!! No room deleted`,
        });
      }
      return res.status(200).json({
        success: true,
        massage: `deleted room`,
        result: result,
      });
    });
}


const getAllrooms = (req, res) => {
    const query = `SELECT book_id,user_id, is_deleted  FROM rooms WHERE ? ;`;

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
                massage: `All Rooms`,
                result: result,
            });
        }
    });
};

const getRoomById =()=>{

}


module.exports = {
    createNewRoom,
    deleteRoomById,
    getAllrooms,
    getRoomById
};
