document.getElementById('more').onclick = More;
var height_nul = 640;
var footer = document.querySelector('.footer');
var show = document.querySelector('#goods');
var widthone = window.matchMedia("(max-width: 1196px)");
var twowidth = window.matchMedia("(max-width: 988px)");
var threewidth = window.matchMedia("(max-width: 539px)");
function More() {
    if (threewidth.matches) {
        height_nul = height_nul * 25;
        show.style.height = height_nul + 'px';
        console.log(height_nul);
        if (height_nul === 16000) {
            height_nul = 16000 + 'px';
        }
    } else if (twowidth.matches) { // If media query matches
        height_nul = height_nul * 12.5;
        show.style.height = height_nul + 'px';
        console.log(height_nul);
        if (height_nul === 8000) {
            height_nul = 8000 + 'px';
        }

    } else if (widthone.matches) {
        height_nul = height_nul * 9;
        show.style.height = height_nul + 'px';
        console.log(height_nul);
        if (height_nul === 5760) {
            height_nul = 5760 + 'px';
        }
    } else {
        height_nul = height_nul * 7;
        show.style.height = height_nul + 'px';
        console.log(height_nul);
        if (height_nul === 4480) {
            height_nul = 4480 + 'px';
        }
    }

}




