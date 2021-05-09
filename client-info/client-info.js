document.getElementById("browser").textContent = navigator.userAgent;
document.getElementById("buildBy").textContent = navigator.vendor;
document.getElementById("cookies").textContent = navigator.cookieEnabled;
document.getElementById("language").textContent = navigator.language;
document.getElementById("URL").textContent = window.location.href;
document.getElementById("previousURL").textContent = window.location.href;
document.getElementById("ScreenXY").textContent = `${window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth}x${window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight}`
