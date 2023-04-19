const { Car } = require("../../models");

exports.renderHome = async (req, res) => {
  try {
    const msg = req.cookies; //dapetin cookie
    const msgSuccessSearch = req.searchMsg;
    const cars = req.car;

    if (msgSuccessSearch) {
      return res.render("index", {
        cars,
        failSearchMsg: null,
        searchMsg: msgSuccessSearch,
        saveMsg: null,
        deleteMsg: null,
        errorMsg: null,
      });
    }

    if (msg?.deleteMsg) {
      res.clearCookie("deleteMsg");
      return res.render("index", {
        cars,
        failSearchMsg: null,
        searchMsg: null,
        saveMsg: null,
        deleteMsg: msg.deleteMsg,
        errorMsg: null,
      });
    }

    if (msg?.createMsg) {
      res.clearCookie("createMsg");
      return res.render("index", {
        cars,
        failSearchMsg: null,
        searchMsg: null,
        saveMsg: msg.createMsg,
        deleteMsg: null,
        errorMsg: null,
      });
    }

    if (msg?.errorMsg) {
      res.clearCookie("errorMsg");
      return res.render("index", {
        cars,
        failSearchMsg: null,
        searchMsg: null,
        saveMsg: null,
        deleteMsg: null,
        errorMsg: msg.errorMsg,
      });
    }

    res.render("index", {
      cars,
      failSearchMsg: null,
      searchMsg: null,
      saveMsg: null,
      deleteMsg: null,
      errorMsg: null,
    });
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

exports.renderCreate = (req, res) => {
  try {
    const msg = req.cookies;
    if (msg?.errorMsg) {
      res.clearCookie("errorMsg");
      return res.render("pages/createCar", {
        failSearchMsg: null,
        searchMsg: null,
        saveMsg: null,
        deleteMsg: null,
        errorMsg: msg.errorMsg,
      });
      // return;
    }
    return res.render("pages/createCar", {
      failSearchMsg: null,
      searchMsg: null,
      saveMsg: null,
      deleteMsg: null,
      errorMsg: null,
    });
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

exports.renderUpdate = (req, res) => {
  try {
    const car = req.car;
    const msg = req.cookies;
    if (msg?.errorMsg) {
      res.clearCookie("errorMsg");
      return res.render("pages/updateCar", {
        car,
        failSearchMsg: null,
        searchMsg: null,
        saveMsg: null,
        deleteMsg: null,
        errorMsg: msg.errorMsg,
      });
      // return;
    }
    return res.render("pages/updateCar", {
      car,
      failSearchMsg: null,
      searchMsg: null,
      saveMsg: null,
      deleteMsg: null,
      errorMsg: null,
    });
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

exports.adminCreateCar = async (req, res) => {
  try {
    const car = req.body;
    const imgUrl = req.imgUrl;
    //template  obj data
    const uploadData = {
      name: car.name,
      type: car.type,
      rentPerDay: Number(car.rentPerDay),
      imgUrl,
    };
    await Car.create({
      ...uploadData,
    });
    res.cookie("createMsg", "Data Berhasil Disimpan");
    res.redirect("/");
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("/");
  }
};

exports.adminDeleteCar = async (req, res) => {
  try {
    const car = req.car;
    await Car.destroy({ where: { id: car.id } });
    res.cookie("deleteMsg", "Data Berhasil Dihapus");
    res.redirect("/");
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("/");
  }
};

exports.adminUpdateCar = async (req, res) => {
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
    res.cookie("createMsg", "Data Berhasil Diupdate");
    res.redirect("/");
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};
