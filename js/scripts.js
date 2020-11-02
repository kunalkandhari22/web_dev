$(document).ready(function() {
    $('#loginbuttonmodal'). click(function() {
    $('#loginModal').modal('show');
    });

    $('#reservemodal'). click(function() {
    $('#reserveModal').modal('show');
    });

    $("#mycarousel").carousel({interval: 20});

    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});