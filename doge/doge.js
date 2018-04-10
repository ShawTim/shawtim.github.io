require("./doge.scss");

const works = require("../index.json");
const tippy = require("tippy.js");
const dogeHTML = require("html-loader!./doge.html");
const menuHTML = require("html-loader!./menu.html");
const itemHTML = require("html-loader!./item.html");

const createNode = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstChild;
};

const appendNode = (html, parentNode) => {
  const node = createNode(html);
  (parentNode || document.body).appendChild(node);
  return node;
};

const addItems = (menu, itemHTML, items) => Object.keys(items).forEach((item) => addItem(menu, itemHTML, items[item]));

const addItem = (menu, itemHTML, item) => {
  const html = itemHTML.replace("${title}", item.name).replace("${image}", item.image).replace("${link}", item.link);
  const node = appendNode(html, menu);
};

document.addEventListener("DOMContentLoaded", (e) => {
  const doge = appendNode(dogeHTML);

  let menu;

  doge.addEventListener("click", () => {
    if (!menu) {
      menu = appendNode(menuHTML);
      addItems(menu.querySelector(".doge-cat"), itemHTML, works);

      menu.querySelector(".doge-cat-close").addEventListener("click", (e) => {
        document.body.removeChild(menu);
        menu = null;
      });

      tippy(".doge-menu [title]", {
        placement: "left",
        arrow: true,
        size: "small",
        distance: 20,
      });
    }
  });

  tippy(".doge-slider, .doge-close", {
    placement: "left",
    arrow: true,
    size: "small",
    distance: 20,
  });

  doge.querySelector(".doge-close").addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.removeChild(doge);
  });
});
