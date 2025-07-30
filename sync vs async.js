console.log('#3. callback');

function foo(bar) {
    bar ();
}

foo(function () {
    console.log('bar');;
});

orderPizza ('vege','cheese');

function orderPizza(type, name) {
    console.log(`pizza $(type), $(name) is ordered`);

    setTimeout(function() {
        console.log(`pizza $(type), $(type) is ready`)
    }, 3000) ;
}