const camera = {
  brand: "Sony",
  model: "A7 IV",
  megapixels: 33,
  storageSlots: 2,
  isFullFrame: true,
  isTurnedOn: false,
  shootingModes: ["Intelligent Auto", "Program Auto", "Aperture Priority", "Shutter Priority", "Manual", "Memory Recall"],
  togglePower: function () {
    camera.isTurnedOn = !camera.isTurnedOn;
  },
  takePhoto: function () {
    alert(camera.isTurnedOn ? "Click! You've taken a photo." : "Sorry, the camera is turned off.");
  },
};

var togglePowerBtn = document.querySelector("#toggle-power-btn");
var takePhotoBtn = document.querySelector("#take-photo-btn");
var powerLabel = document.querySelector("#power-label");
var cameraNameElement = document.querySelector("#camera-name");

function changePowerLabel() {
  powerLabel.textContent = camera.isTurnedOn ? "ON" : "OFF";
}

togglePowerBtn.addEventListener("click", function () {
  camera.togglePower();
  changePowerLabel();
});

takePhotoBtn.addEventListener("click", function () {
  camera.takePhoto();
});

cameraNameElement.textContent = `${camera.brand} ${camera.model}`;
