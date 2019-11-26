$(document).ready(function(){

    //.hover(callback, callback);
    $("#lineas g").hover(function() {

        $("#lineas g").css("opacity",0.3);
        $(this).css("opacity",1);
    }, function(){
        $("#lineas g").css("opacity",1);
    });

});
$(document).ready(function(){

    //.hover(callback, callback);
    $("#capas g").hover(function() {

        $("#capas g").css("opacity",0.3);
        $(this).css("opacity",1);
    }, function(){
        $("#capas g").css("opacity",1);
    });

});
