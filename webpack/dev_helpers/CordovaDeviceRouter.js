const deviceJs = require('current-device').default;

function bodyPrepend (platform) {
  let head = document.querySelector("head"),
    script = document.createElement("script");

  script.onload = function () {
    console.log("Cordova script loaded!");
  };

  script.src = `platform_cordova_files/${platform}/cordova.js`;
  head.appendChild(script);


  console.log(`${platform} platform cordova.js injected.`);
}

if (deviceJs.android())
  bodyPrepend("android");
else if (deviceJs.ios())
  bodyPrepend("ios");
else
  bodyPrepend("browser");
