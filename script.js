//your JS code here. If required.
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

let ans = "You are using " + browserName + " version " + browserVersion

document.getElementById("browser-info").innerText=ans;