const cloudinary = require("../../../config/cloudinary.js");
const getPublicId = require("../../../utils/getPublicId.js");

const adminCloudinaryDelete = async (req, res, next) => {
  try {
    const public_id = getPublicId(req.car.imgUrl);
    await cloudinary.uploader.destroy(public_id);

    next();
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

module.exports = adminCloudinaryDelete;
