import { createHeader } from "./header";
import { createHome, deleteHome } from "./home";
import { createMenu, deleteMenu } from "./menu";
import { createContact, deleteContact } from "./contact";

document.body.onload = () => {
  createHeader();
  createHome();
};

window.onclick = function (event) {
  if (event.target.classList.contains("home")) {
    if (document.querySelector("#menu")) {
        deleteMenu();
    } else if (document.querySelector("#contact")) {
        deleteContact();
    }
    if (document.querySelector("#hero-text") == null) {
        createHome();
    }
  } else if (event.target.classList.contains("menu")) {
    if (document.querySelector("#hero-text")) {
        deleteHome();
    } else if (document.querySelector("#contact")) {
        deleteContact();
    }
    if (document.querySelector("#menu") == null) {
        createMenu();
    }
  } else if (event.target.classList.contains("contact")) {
    if (document.querySelector("#hero-text")) {
        deleteHome();
    } else if (document.querySelector("#menu")) {
        deleteMenu();
    }
    if (document.querySelector("#contact") == null) {
        createContact();
    }
  }
};
