$(document).ready(function(){

    $(".phonemask").mask("+7(999) 999-9999");

    $('.frm__agronom').submit(function(event) {
        var name_frm_agronom = $("#name_frm_agronom");
        var phone_frm_agronom = $("#phone_frm_agronom");
        if(!$(name_frm_agronom).val() || !$(phone_frm_agronom).val()) {
            $(name_frm_agronom).addClass("alert");
            $(phone_frm_agronom).addClass("alert");
            $(name_frm_agronom).addClass("animated shake");
            $(phone_frm_agronom).addClass("animated shake");
            setTimeout(function() {
                $(name_frm_agronom).removeClass("alert");
                $(phone_frm_agronom).removeClass("alert");
                $(name_frm_agronom).removeClass("animated shake");
                $(phone_frm_agronom).removeClass("animated shake");
            },3000);
            event.preventDefault();
        };
    });


    $('.frm__present').submit(function(event) {
        var name_frm_present = $("#name_frm_present");
        var phone_frm_present = $("#phone_frm_present");
        if(!$(name_frm_present).val() || !$(phone_frm_present).val()) {
            $(name_frm_present).addClass("alert");
            $(phone_frm_present).addClass("alert");
            $(name_frm_present).addClass("animated shake");
            $(phone_frm_present).addClass("animated shake");
            setTimeout(function() {
                $(name_frm_present).removeClass("alert");
                $(phone_frm_present).removeClass("alert");
                $(name_frm_present).removeClass("animated shake");
                $(phone_frm_present).removeClass("animated shake");
            },3000);
            event.preventDefault();
        };
    });

    function myScrollTo(o) {
        var t = $("." + o).offset().top - 10;
        $("html, body").animate({
            scrollTop:t
        }, 1500);
	};

});

