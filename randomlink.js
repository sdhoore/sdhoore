   var sites = [
        'https://www.instagram.com/baboo/',
        'https://open.spotify.com/artist/7IBi5YrhJPgXzgfCwslAvu?si=59BQrnz6TEmlfBMpSBCKUg'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }
