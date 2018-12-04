var cart = {}; //корзина
$('document').ready(function () {
    loadGoods();
    checkCart();
    showMiniCart();
});
//Загружаєм товари на сторінку
function loadGoods () {
    $.getJSON('goods.json', function (data) {
        var out = '';
        for (var key in data) {
            if (data[key]['type'] === 'iPad') {
                out += '<div class="card">';
                out += '<img class="card-img-top" src="'+data[key].image+'"/>';
                out += '<div class="card-body">';
                out += '<h4 class="card-title">' + data[key]["name"] + '</h4>';
                out += '<p class="card-text"> Ціна: ' + data[key]["cost"] + "$" + '</p>';
                // out += '<p>' + data[key]["description"] + '</p>';
                out += '<button class="btn btn-primary plus_goods" data-art="'+key+'">Купити</button>';
                out += '</div>';
                out += '</div>';
            }
        }
        $('#goods').html(out);
        $('.plus_goods').on('click', addToCart);
    });
}
// добавляєм товар до корзини
function addToCart () {
    var article = $(this).attr('data-art');
    if (cart[article] != undefined) {
        cart[article]++;
    } else  {
        cart[article] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    showMiniCart();
}
//провірка наявності товара
function checkCart () {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

//показуєм що створено у корзині
function showMiniCart () {
    var out = 0;
    for (var k in cart) {
        out += cart[k];
    }

    $('#mini-cart').text(out);
}