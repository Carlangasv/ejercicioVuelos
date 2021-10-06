const { uuid } = require("uuidv4");
const _db = require("../../services/db");

/**
 * Response with all the data from materials
 * @param {*} req
 * @param {*} res
 */

/**
 * Response with the value for the key provided in the params
 * @param {*} req
 * @param {*} res
 */
const getOneFlight = (req, res) => {
  try {
    let id = req.params.id;
    let data = _db.getData("flight");
    let value = data.get(id);
    let today = new Date().setHours(0,0,0);
    if (value) {
      let date = value.date;
      if (Date.parse(date) > today) {
        if (value.seats > 0) {
          res.status(200).send({
            success: true,
            message: "Item fetch successfully.",
            info: value,
          });
        } else {
          res.status(400).send("El vuelo no tiene mas sillas disponibles");
        }
      } else {
        res.status(400).send("Vuelo no disponible");
      }
    } else {
      res.status(404).send("Vuelo no encontrado");
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was an error trying to get item.",
      error: error.message,
    });
  }
};
module.exports = { getOneFlight };
