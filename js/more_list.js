document.getElementById('more').onclick = More;
var height_nul = 640;
var footer = document.querySelector('.footer');

function More() {
    var show = document.querySelector('#goods');
    height_nul = height_nul * 7;
    show.style.height = height_nul + 'px';
    console.log(height_nul);
    if (height_nul === 4480) {
        height_nul = 4480 + 'px';
    }
}




