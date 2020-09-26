"use strict";

// We can defined config to easily customize HTML banner
let config = [];

// Read config data as json file, like img address,
// title, button color and href ...
function loadJSON(callback) {
  let xobj = new XMLHttpRequest();

  xobj.overrideMimeType("application/json");
  xobj.open("GET", "http://localhost:9000/config.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };

  xobj.send(null);
}

// Base on element type it will changes DOM or CSS style
function renderElements(element) {
  const { type, data, attr, elId, property } = element;

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
    resolve(JSON.parse(response));
  });
});

readDataFromJson
  .then((result) => {
    // Attach config to DOM
    result.data.forEach((element) => {
      renderElements(element);
    });
  })
  .catch((error) => console.error(error));
