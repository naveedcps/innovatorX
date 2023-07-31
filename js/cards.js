jQuery(document).ready(function() {
    jQuery(".card-buttons button").click(function(){
        jQuery(this).parents(".card-buttons").children("button").removeClass("is-active");
        jQuery(this).addClass("is-active");
        jQuery(this).parents(".card").find(".card-section").removeClass("is-active");
        var section = jQuery(this).attr("data-section");
        jQuery(this).parents(".card").find(section).addClass("is-active");
        jQuery(this).parents(".card").attr("data-state", section);
        var carddata = jQuery(this).parents(".card").attr("data-state");
        if (carddata == "#about" ) {
            jQuery(this).parents(".card").removeClass("is-active");
        } else {
            jQuery(this).parents(".card").addClass("is-active");
        }

    });
});