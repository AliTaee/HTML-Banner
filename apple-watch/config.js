"use strict";

// We can defined config to easily customize HTML banner
const config = [{
    type: "dom-attr",
    elId: "bnrw-brand",
    attr: "innerHTML",
    data: "apple watch",
  },
  {
    type: "dom-attr",
    elId: "bnrw-model",
    attr: "innerHTML",
    data: "series 6",
  },
  {
    type: "dom-attr",
    elId: "bnrw-btn",
    attr: "href",
    data: "https://www.apple.com/watch/",
  },
  {
    type: "dom-attr",
    elId: "bnrw-btn",
    attr: "innerHTML",
    data: "buy!",
  },
  {
    type: "dom-attr",
    elId: "bnrw-btn",
    attr: "target",
    data: "_blank",
  },
  {
    type: "css-property",
    elId: "bnrw-band",
    property: "backgroundImage",
    data: "./images/band.png",
  },
  {
    type: "css-property",
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
    case 'dom-attr':
      document.getElementById(elId)[attr] = data;
      break;
    case 'css-property':
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