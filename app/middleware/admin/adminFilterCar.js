const { Car } = require("../../models");

const adminFilterCar = async (req, res, next) => {
  try {
    if (!req.query.type || req.query.type == "all") {
      if (req.query.search) {
        const car = await Car.findAll(); //params, query, body
        const filteredCarSearch = await car.filter((car) =>
          String(car.dataValues.name).toLowerCase().includes(req.query.search)
        );
        if (filteredCarSearch.length < 1) {
          return res.render("pages/searchNotFound", {
            failSearchMsg: "Data Tidak Ditemukan",
            searchMsg: null,
            saveMsg: null,
            deleteMsg: null,
            errorMsg: null,
          });
        }
        req.searchMsg = "Data Berhasil Ditemukan";
        req.car = filteredCarSearch;
        return next();
      }
      const car = await Car.findAll();
      req.car = car;
      return next();
    }
    const car = await Car.findAll(); //find all data
    const filteredCarType = await car.filter(
      (car) => car.dataValues.type == req.query.type
    );
    req.car = filteredCarType;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

module.exports = adminFilterCar;
