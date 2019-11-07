$(".basket-btn").click(function(){
    if(!$(".busket-container").hasClass("active")){
        $(".busket-container").addClass("active");
    }
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