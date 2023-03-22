$(document).ready(function(){
    let menuBtn = $(".menu-btn");
    let menuList = $(".menu-list");
    menuBtn.find('div').removeClass("active");
    menuList.removeClass("active");
    menuBtn.on("click", function(){
        menuBtn.find('div').toggleClass("active");
        menuList.toggleClass("active");
    });
});