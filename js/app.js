var cart = {}; //корзина
$('document').ready(function () {
    loadGoods();
    checkCart();
    showMiniCart();
});
//Загружаєм товари на сторінку
function loadGoods () {
    $.getJSON('goods.json', function (data) {
        console.log(data);
        var out = '';
        for (var key in data) {
            out += '<div class="single-goods">';
            out += '<h3>' + data[key]["name"] + '</h3>';
            out += '<img src="'+data[key].image+'"/>';
            out += '<p> Ціна: ' + data[key]["cost"] + "$" + '</p>';
            // out += '<p>' + data[key]["description"] + '</p>';
            out += '<button class="buy" data-art="'+key+'">Купити</button>';
            out += '</div>'

        }
        $('#goods').html(out);
        $('button.buy').on('click', addToCart);
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
