"use strict";

// We can defined config to easily customize HTML banner
const config = [{
    type: "text",
    elId: "bnrw-brand",
    attr: "innerHTML",
    data: "apple watch",
  },
  {
    type: "text",
    elId: "bnrw-model",
    attr: "innerHTML",
    data: "series 6",
  },
  {
    type: "text",
    elId: "bnrw-btn",
    attr: "href",
    data: "https://www.apple.com/watch/",
  },
  {
    type: "text",
    elId: "bnrw-btn",
    attr: "innerHTML",
    data: "buy!",
  },
  {
    type: "css-background-image",
    elId: "bnrw-band",
    property: "backgroundImage",
    data: "./images/band.png",
  },
  {
    type: "css-background-image",
    elId: "bnrw-watch",
    property: "backgroundImage",
    data: "./images/watch.png",
  },
];

function renderElements(element) {
  const {
    type,
    data,
    attr,
    elId,
    property
  } = element

  switch (type) {
    case 'text':
      document.getElementById(elId)[attr] = data;
      break;
    case 'css-background-image':
      document.getElementById(elId).style[property] = `url(${data})`;
      break;

    default:
      throw console.error('Please set element type in config banner');
  }
}

// Attach data config to HTML banner
config.forEach((element) => {
  renderElements(element)
});