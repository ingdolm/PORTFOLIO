$(document).ready(function(){
    let menuBtn = $(".menu-btn");
    let menuList = $(".menu-list");
    menuBtn.on("click", function(){
        menuBtn.find('div').toggleClass("active");
        menuList.toggleClass("active");
    });
});