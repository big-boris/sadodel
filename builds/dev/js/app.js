$(document).ready(function(){

    $(".phonemask").mask("+7(999) 999-9999");

    $('.frm__agronom').submit(function(event) {
        console.log('Hey!');
        var name_frm_agronom = $("#name_frm_agronom");
        var phone_frm_agronom = $("#phone_frm_agronom");
        if(!$(name_frm_agronom).val() || !$(phone_frm_agronom).val()) {
            console.log($(name_frm_agronom).val());
            $(name_frm_agronom).addClass("alert");
            $(phone_frm_agronom).addClass("alert");
            setTimeout(function() {
                $(name_frm_agronom).removeClass("alert"),
                $(phone_frm_agronom).removeClass("alert")
            },3000);
        };
        event.preventDefault();
    });

    $('.frm__present').submit(function(event) {
        console.log('Hey!');
        var name_frm_present = $("#name_frm_present");
        var phone_frm_present = $("#phone_frm_present");
        if(!$(name_frm_present).val() || !$(phone_frm_present).val()) {
            console.log($(name_frm_present).val());
            $(name_frm_present).addClass("alert");
            $(phone_frm_present).addClass("alert");
            setTimeout(function() {
                $(name_frm_present).removeClass("alert"),
                $(phone_frm_present).removeClass("alert")
            },3000);
        };
        event.preventDefault();
    });

    function myScrollTo(o) {
        var t = $("." + o).offset().top - 10;
        $("html, body").animate({
            scrollTop:t
        }, 1500);
	};

});

