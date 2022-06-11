var urls = new Array();
urls[0] = "/spooky";
urls[1] = "/anotherdayanotherworstebroodje";
urls[2] = "/handsome";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
