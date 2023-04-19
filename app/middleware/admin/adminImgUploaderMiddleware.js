const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const imgFilter = (req, file, callback) => {
  let extFile = path.extname(file.originalname);
  if (extFile === ".png" || extFile === ".jpg" || extFile === ".jpeg")
    return callback(null, true);
  callback(null, false);
  callback(new Error("Filetype must be PNG/JPG/JPEG"));
};

const upload = multer({
  storage: storage,
  fileFilter: imgFilter,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
}).single("image");

const adminImgUploader = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.cookie("errorMsg", err.message);
      res.redirect("back");
      return;
    } else if (err) {
      // An unknown error occurred when uploading.
      res.cookie("errorMsg", err.message);
      res.redirect("back");
      return;
    }
    next();
  });
};

module.exports = adminImgUploader;
