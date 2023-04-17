const toggle = document.querySelector("#toggle");
const sideMenu = document.querySelector(".sidebar");
const target = document.querySelector("#main");
const deleteNotif = document.querySelector(".notif__delete");
const saveNotif = document.querySelector(".notif__save");
const errorNotif = document.querySelector(".notif__error");
const searchNotif = document.querySelector(".notif__search");
const failSearchNotif = document.querySelector(".notif__failSearch");
const cardCar = document.querySelectorAll("#card__car");
const btnType = document.querySelectorAll("#btn__type");

//Handling to make dissappear notification
if (failSearchNotif) {
  setTimeout(() => {
    document.querySelector(".notif__failSearch").remove();
  }, 1500);
}
if (searchNotif) {
  setTimeout(() => {
    document.querySelector(".notif__search").remove();
  }, 1500);
}
if (deleteNotif) {
  setTimeout(() => {
    document.querySelector(".notif__delete").remove();
  }, 1500);
}
if (saveNotif) {
  setTimeout(() => {
    document.querySelector(".notif__save").remove();
  }, 1500);
}
if (errorNotif) {
  setTimeout(() => {
    document.querySelector(".notif__error").remove();
  }, 1500);
}

// handling state of url params
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

//Sidebar toggle
toggle.addEventListener("click", () => {
  if (sideMenu.style.display === "none") {
    sideMenu.style.display = "flex";
    localStorage.setItem("open", "true");
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-3");
      element.classList.add("col-sm-4");
    });
  } else {
    sideMenu.style.display = "none";
    localStorage.removeItem("open");
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-4");
      element.classList.add("col-sm-3");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  //Get url search params type category
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  btnType.forEach((element) => {
    //handling focused button filter type category
    if (!params.type && element.value == "all") {
      element.classList.remove("btn__type__non");
      element.classList.add("btn__type__active");
    }
    if (element.value == params.type) {
      element.classList.remove("btn__type__non");
      element.classList.add("btn__type__active");
    }
    element.classList.add("btn__type__non");
  });

  //if local true open sidebar
  if (localStorage.getItem("open")) {
    sideMenu.style.display = "flex";
    document.getElementById("cbox").checked = true;
  }

  // handling dynamic cards on open/close sidebar
  if (sideMenu.style.display === "flex") {
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-3");
      element.classList.add("col-sm-4");
    });
  } else {
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-4");
      element.classList.add("col-sm-3");
    });
  }
});
