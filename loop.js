//pętla

function rysujChoinkę(x) {
    for (var k = 0; k <= x; k++) {
        var star = '';
        for (var n = 0; n < k*2-1; n++) {
            star += '*';
        }
        console.log(star);    
    }
}