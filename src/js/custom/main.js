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