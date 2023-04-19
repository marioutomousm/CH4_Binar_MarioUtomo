const { initAPI } = require("./api/initApiController.js");
const {
  getAllCar,
  getCar,
  deleteCar,
  createCar,
  updateCar,
} = require("./api/carController.js");

const {
  renderHome,
  renderCreate,
  adminCreateCar,
  adminDeleteCar,
  renderUpdate,
  adminUpdateCar,
} = require("./admin/adminController.js");

module.exports = {
  initAPI,
  getAllCar,
  getCar,
  deleteCar,
  createCar,
  updateCar,
  renderHome,
  renderCreate,
  adminCreateCar,
  adminDeleteCar,
  renderUpdate,
  adminUpdateCar,
};
