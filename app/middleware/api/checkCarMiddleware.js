const { Car } = require("../../models");

const checkCar = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resData = await Car.findOne({
      where: { id },
    });

    if (!resData) {
      res.status(404).json({
        error: "Car not found!",
      });

      return;
    }

    req.car = resData;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

module.exports = checkCar;
