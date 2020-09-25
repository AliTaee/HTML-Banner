"use strict";

// We can defined config to easily customize HTML banner
var config = [{
    elId: "bnrw-brand",
    attr: "innerHTML",
    data: "apple watch",
  },
  {
    elId: "bnrw-model",
    attr: "innerHTML",
    data: "series 6",
  },
  {
    elId: "bnrw-btn",
    attr: "href",
    data: "https://www.apple.com/watch/",
  },
  {
    elId: "bnrw-btn",
    attr: "innerHTML",
    data: "buy!",
  },
];

// Attach data config to HTML banner
config.forEach((el) => {
  document.getElementById(el.elId)[el.attr] = el.data;
});