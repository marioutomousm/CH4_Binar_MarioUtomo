const checkCar = require("./api/checkCarMiddleware");
const imgUploader = require("./api/imgUploaderMiddleware.js");
const cloudinaryUpload = require("./api/cloudinaryUpMiddleware.js");
const cloudinaryDelete = require("./api/cloudinaryDelMiddleware.js");
const adminFilterCar = require("./admin/adminFilterCar.js");
const adminCheckCar = require("./admin/adminCheckCarMiddleware.js");
const adminImgUploader = require("./admin/adminImgUploaderMiddleware.js");
const adminCloudinaryUpload = require("./admin/adminCloudinaryUpMiddleware.js");
const adminCloudinaryDelete = require("./admin/adminCloudinaryDelMiddleware.js");

module.exports = {
  checkCar,
  cloudinaryUpload,
  cloudinaryDelete,
  imgUploader,
  adminFilterCar,
  adminCheckCar,
  adminImgUploader,
  adminCloudinaryUpload,
  adminCloudinaryDelete,
};
