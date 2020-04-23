$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});
$("#loginButton").click(function(){
$("#loginModal").modal({
keyboard: true
})

});
$("#closeLogin").click(function(){
$("#loginModal").modal('hide');

});
$("#cancelLogin").click(function(){
$("#loginModal").modal('hide');
});
$("#reserveButton").click(function(){
$("#reserve").modal({
keyboard: true
})
});
$("#closeReserve").click(function(){
$("#reserve").modal('hide');
});
$("#closeModalFooter").click(function(){
$("#reserve").modal('hide');
});