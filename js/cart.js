var cart = {};  //корзина

$.getJSON('goods.json', function (data) {
   var goods = data;  // всі товари в масиві
   //console.log(data);
   checkCart();
   showCart(); // ввивід товарів на сторіку
   //console.log(cart);
    showMiniCart();

   function showCart () {
       if ($.isEmptyObject(cart)   ) {
           var out = 'Корзина пуста. Щоб добавити товар в корзину перейдіть на <a href="index.html">головну</a> сторінку';
           $('#my-cart').html(out);
           var sum = '0';
           $('#sum').html(sum);
       } else {
        var out = '';
       var sum = 0;
       for (var key in cart) {
           out += '<div class="card">';
           out += '<div class="imgAndName">';
           out += '<img src="'+goods[key].image +'" class="cart_img">';
           out += '<h3>' + goods[key].name + '</h3>';
           out += '</div>';
           out += '<div class="priseAndAdd">';
           out += '<button class="minus btn btn-primary" data-art="'+ key +'"> - </button>';
           out += '<p>' + cart[key] + '</p>';
           out += '<button class="add btn btn-primary" data-art="'+ key +'"> + </button>';
           out += cart[key]*goods[key].cost + '$';
           out += '<button class="delete btn btn-primary" data-art="'+ key +'"> Delete </button>';
           out += '</div>';
           out += '</div>';
           sum += cart[key]*goods[key].cost;
       }

       $('#my-cart').html(out);
       $('#sum').html(sum);
       $('.add').on('click', plusGoods);
       $('.minus').on('click', minusGoods);
       $('.delete').on('click', deleteGoods);
       }
   }

    function plusGoods() {
        var article = $(this).attr('data-art');
        cart[article]++;
        showMiniCart();
        saveCartToLS();  //збереження корзини в localStorage
        showCart();  //візуалізація нової корзини
    }

    function minusGoods() {
        var article = $(this).attr('data-art');
        if (cart[article] > 1) {
            cart[article]--;

        } else {
            delete cart[article];
        }
        showMiniCart();
        saveCartToLS(); //збереження корзини в localStorage
        showCart();      //візуалізація нової корзини


    }
    function deleteGoods () {
        var article = $(this).attr('data-art');
        delete cart[article];
        saveCartToLS(); //збереження корзини в localStorage
        showCart();   //візуалізація нової корзини
        showMiniCart();
    }
});

function checkCart () {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showMiniCart () {
    var out = 0;
    for (var k in cart) {
        out += cart[k];
    }

    $('#mini-cart').text(out);
}
