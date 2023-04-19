const cloudinary = require("../../../config/cloudinary.js");
const getPublicId = require("../../../utils/getPublicId.js");

const adminCloudinaryUpload = async (req, res, next) => {
  try {
    if (req.car?.id) {
      // skipping while empty file input
      if (!req.file) {
        next();
        return;
      }
      const public_id = getPublicId(req.car.imgUrl);
      await cloudinary.uploader.destroy(public_id); //delete old pict
    }

    const fileBase64 = req.file.buffer.toString("base64"); //convert buffer to base64
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    const folderCloudinary = "car-api-challenge"; //folder in cloudinary console

    const uploadImg = await cloudinary.uploader.upload(file, {
      folder: folderCloudinary,
    });

    req.imgUrl = uploadImg.secure_url; //generated url

    next();
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

module.exports = adminCloudinaryUpload;
