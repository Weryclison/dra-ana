const body = document.body;
body.classList.add("js");

import menuMobile from "./js/menu-mobile.js";
import scrollSuave from "./js/scroll-suave.js";

if (body.classList.contains("js")) {
  menuMobile();
  scrollSuave();
}
