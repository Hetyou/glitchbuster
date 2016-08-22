function halo(s, c1, c2){
    return cache(s, s, function(r){
        var g = r.createRadialGradient(
            s / 2, s / 2, 0,
            s / 2, s / 2, s / 2
        );

        g.addColorStop(0, c1);
        g.addColorStop(1, c2);

        r.fillStyle = g;
        r.fillRect(0, 0, s, s);
    });
}

var whiteHalo = halo(HALO_SIZE, 'rgba(255, 255, 255, .25)', 'rgba(255, 255, 255, 0)'),
    redHalo = halo(HALO_SIZE, 'rgba(255, 0, 0, .25)', 'rgba(255, 0, 0, 0)');


var darkHalo = halo(DARK_HALO_SIZE, 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)');
