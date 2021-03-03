(function () {
    var header = document.querySelector(".header");
    let headroom = new Headroom(header);
    headroom.init()
}());
$(document).ready(function() {
	$(".main").css("min-height", $(window).outerHeight(!0) - $(".header").outerHeight(!0) - $(".footer").outerHeight(!0))
});