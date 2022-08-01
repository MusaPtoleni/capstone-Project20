$(() => {
    //hide and show effects
    $("#btn-hide").click(()=>{
        $("#links").hide()
    });
    
    $("#btn-show").click(()=>{
        $("#links").show()
    });
    
    //animation effects
    $(".anime").click(()=>{
        $("header").css("visibility","visible");
        $("header").animate({left:"150vh"},2000);
    });

});