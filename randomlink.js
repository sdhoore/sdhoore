var urls = new Array();
urls[0] = "https://www.instagram.com/deathstarmacgyver/";
urls[1] = "https://open.spotify.com/artist/7IBi5YrhJPgXzgfCwslAvu?si=zxuj0NwLRD-8vkJ9HbWLjA";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
