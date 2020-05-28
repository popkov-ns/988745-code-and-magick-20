'use strict'

window.fireballSize = 22;
window.wizardSpeed = 3;
window.wizardWidth = 70;

window.getFireballSpeed = function (movingLeft) {
  return movingLeft ? 5 : 2;
}

window.getWizardHeight = function (width) {
  return 1.337 * width;
}

window.getWizardX = function (width) {
  return (width - wizardWidth) / 2;
}

window.getWizardY = function (height) {
  return height / 3;
}
