"use strict";

// We can defined config to easily customize HTML banner
let config = [];

function loadJSON(callback) {
  let xobj = new XMLHttpRequest();

  xobj.overrideMimeType("application/json");
  xobj.open("GET", "http://localhost:1234/config.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };

  xobj.send(null);
}

function renderElements(element) {
  const {
    type,
    data,
    attr,
    elId,
    property
  } = element;

  switch (type) {
    case "dom-attr":
      document.getElementById(elId)[attr] = data;
      break;
    case "css-property":
      document.getElementById(elId).style[property] = data;
      break;
    case "css-background-image":
      document.getElementById(elId).style[property] = `url(${data})`;
      break;

    default:
      throw console.error("Please set element type in config banner");
  }
}

const readDataFromJson = new Promise((resolve) => {
  loadJSON(function (response) {
    console.log(response)
    resolve(JSON.parse(response));
  });
});

readDataFromJson
  .then((result) => {
    // Attach data config to HTML banner
    result.data.forEach((element) => {
      console.info("element", element);
      renderElements(element);
    });
  })
  .catch((error) => console.error(error));