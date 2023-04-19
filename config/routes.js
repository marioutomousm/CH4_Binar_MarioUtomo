const router = require("express").Router();
const controller = require("../app/controllers");
const middleware = require("../app/middleware");

const prefixApi = "/api/v1/cars";

// Restful Api | /api/v1/cars
router.get(prefixApi, controller.getAllCar);
router.post(
  prefixApi,
  middleware.imgUploader,
  middleware.cloudinaryUpload,
  controller.createCar
);
router.get(`${prefixApi}/:id`, middleware.checkCar, controller.getCar);
router.delete(
  `${prefixApi}/:id`,
  middleware.checkCar,
  middleware.cloudinaryDelete,
  controller.deleteCar
);
router.put(
  `${prefixApi}/:id`,
  middleware.checkCar,
  middleware.imgUploader,
  middleware.cloudinaryUpload,
  controller.updateCar
);

// Admin | /
router.get("/", middleware.adminFilterCar, controller.renderHome);
router.get("/create", controller.renderCreate);
router.post(
  "/create",
  middleware.adminImgUploader,
  middleware.adminCloudinaryUpload,
  controller.adminCreateCar
);
router.get(
  "/delete/:id",
  middleware.adminCheckCar,
  middleware.adminCloudinaryDelete,
  controller.adminDeleteCar
);
router.get("/update/:id", middleware.adminCheckCar, controller.renderUpdate);
router.post(
  "/update/:id",
  middleware.adminCheckCar,
  middleware.adminImgUploader,
  middleware.adminCloudinaryUpload,
  controller.adminUpdateCar
);

module.exports = router;
