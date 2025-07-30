console.log('#3. callback');

function foo(bar) {
    bar ();
}

foo(function () {
    console.log('bar');;
});