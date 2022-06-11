var urls = new Array();
urls[0] = "/one";
urls[1] = "/two";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
