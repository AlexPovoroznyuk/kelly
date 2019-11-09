$(".basket-btn").click(function(){
    var busket = $(this).attr("data-open");
    if(!$(`[data-busket='${busket}']`).hasClass("active")){
        $(`[data-busket]`).removeClass("active");
        $(`[data-busket='${busket}']`).addClass("active");
    }
    else{
        $(`[data-busket='${busket}']`).removeClass("active"); 
    }
    console.log(`[data-busket='${busket}']`)
});

$(".busket-container .close-triggrer button").click(function(){
    $(".busket-container").removeClass("active");
});


$(".search-btn").click(function(){
    if(!$(".search-container").hasClass("active")){
        $(".search-container").addClass("active");
    }
});

$(".search-close-btn").click(function(){
    console.log("segweg")
    $(".search-container").removeClass("active");
   
});


$(".category-item").mouseenter(function(){
    console.log("segweg")
    $(".category-item").removeClass("hover");
    $(this).addClass("hover")
});

$(".catalog-trigger button").click(function(){
    if(!$(".menu").hasClass("open-catalog")){
    $(".menu").addClass("open-catalog");
    $(".catalog").addClass("active");
}
else{
    $(".menu").removeClass("open-catalog");
    $(".catalog").removeClass("active");
}
})

$(window).scroll(function(){
    if($(window).scrollTop() > 5){
        if(!$(".menu").hasClass("scrolled")) {
          $(".menu").addClass("scrolled")  
        }
        
    }
    else{
        $(".menu").removeClass("scrolled")
    }
})