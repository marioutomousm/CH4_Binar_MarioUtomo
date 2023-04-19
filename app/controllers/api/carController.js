const { Car } = require("../../models");
const cloudinary = require("../../../config/cloudinary.js");
const getPublicId = require("../../../utils/getPublicId.js");

//Funtion for delete img
const deleteImg = async (imgurl) => {
  try {
    const public_id = getPublicId(imgurl);
    await cloudinary.uploader.destroy(public_id);
    console.log("Succes delete Image!");
  } catch (error) {
    throw error.message;
  }
};

exports.createCar = async (req, res) => {
  try {
    const car = req.body;
    const imgurl = req.imgurl;
    //template  obj data
    const uploadData = {
      name: car.name,
      type: car.type,
      sewahari: Number(car.sewahari),
      imgurl,
    };
    const resUpload = await Car.create({
      ...uploadData,
    });
    res.status(200).json({
      message: "Succes Add Car!",
      data: resUpload,
    });
  } catch (error) {
    const imgurl = req.imgurl;
    await deleteImg(imgUrl); //delete img if upload fail to db
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

exports.getAllCar = async (req, res) => {
  try {
    const resData = await Car.findAll();
    res.status(200).json({
      message: "Succes Get Data!",
      data: resData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

exports.getCar = (req, res) => {
  try {
    const car = req.car;
    res.status(200).json({
      message: "Succes Get Car!",
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = req.car;
    const resData = await Car.destroy({ where: { id: car.id } });
    res.status(200).json({
      message: `Succes Delete Car!`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = req.car;
    const newData = req.body;
    const imgUrl = req.imgUrl || car.imgUrl;
    //template  obj data
    const uploadData = {
      name: newData.name || car.name,
      type: newData.type || car.type,
      rentPerDay: Number(newData.rentPerDay) || car.rentPerDay,
      imgUrl,
    };
    await Car.update(
      {
        ...uploadData,
      },
      { where: { id: car.id } }
    );
    res.status(200).json({
      message: `Succes Update Car!`,
      data: uploadData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};
