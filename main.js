// click su hamburger menu
$(".header-right a").click(function () {
    // mostra il menu
    $('.hamburger-menu').addClass('active');
});
// click su x per chiudere hamburger menu
$(".close").click(function () {
    // chiudi il menu
    $('.hamburger-menu').removeClass('active');
});
