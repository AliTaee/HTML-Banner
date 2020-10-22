'use strict'
import configJson from '../assets/config.json'

// We can defined config to easily customize HTML banner
let configBannerData = configJson.data

// Base on element type it will changes DOM or CSS style
function renderElements(domElement) {
  const { type, data, attribute, elementId, property } = domElement

  switch (type) {
    case 'dom-attribute':
      document.getElementById(elementId)[attribute] = data
      break
    case 'css-property':
      document.getElementById(elementId).style[property] = data
      break
    case 'css-background-image':
      document.getElementById(elementId).style[property] = `url(${data})`
      break

    default:
      throw console.error('Please set element type in config banner')
  }
}

configBannerData.forEach((domElement) => {
  renderElements(domElement)
})
