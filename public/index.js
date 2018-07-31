//The scrolling stuff is by me :)
$(document).ready(function () {
    // create sidebar and attach to menu open
    $(".ui.sidebar").sidebar("attach events", ".toc.item");
});

window.onscroll = function () {
    myFunction()
};
var oldScrollAmount = 0;
var newScrollAmount = 0;

function myFunction() {
    if ((newScrollAmount = document.body.scrollTop) > 100 || (newScrollAmount = document.documentElement.scrollTop) > 100) {
        if (oldScrollAmount <= 100) {
            $(".fixed.menu").transition("fade in");
        }
        oldScrollAmount = newScrollAmount
    } else if ((newScrollAmount = document.body.scrollTop) < 100 || (newScrollAmount = document.documentElement.scrollTop) < 100) {
        if (oldScrollAmount >= 100) {
            $(".fixed.menu").transition("fade out");
        }
        oldScrollAmount = newScrollAmount
    }
}