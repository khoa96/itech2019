$( document ).ready(function() {
    // $( ".content-2-list" ).each(function( index ) {
		// $(this).css("display", "none");
	// });
});


$( ".content-2-step" ).click(function() {
	if ($(this).find(".content-2-list").css("display")=="block"){
		$(this).find(".content-2-list").css("display", "none");
	}else{
		$(this).find(".content-2-list").css("display", "block");
	}
	
});
function hideall(){
	$( ".khoahoc-item" ).each(function( index ) {
		 $(this).css("display", "none");
	 });
}
$( ".khoahoc-caodang" ).click(function() {
	hideall();
	$(".khoahoc-description-caodang").css("display", "block");
});
$( ".khoahoc-CCNA" ).click(function() {
	hideall();
	$(".khoahoc-description-CCNA").css("display", "block");
});
$( ".khoahoc-PHP" ).click(function() {
	hideall();
	$(".khoahoc-description-PHP").css("display", "block");
});

$(".section-vientruong").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#vientruong").offset().top + offset
    }, 2000);
});
$(".section-khoahoc").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#khoahoc").offset().top + offset
    }, 2000);
});
$(".section-content-2").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#content-2").offset().top + offset
    }, 2000);
});
$(".section-doitac").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#doitac").offset().top + offset
    }, 2000);
});
$(".section-register").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#register").offset().top + offset
    }, 2000);
});
$(".section-footer").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#footer").offset().top + offset
    }, 2000);
});
$("#register-khoahoc").change(function(){
	$("#register-khoahoc-text").val($(this).val());
})

