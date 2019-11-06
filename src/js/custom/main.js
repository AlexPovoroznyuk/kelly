$(".basket-btn").click(function(){
    if(!$(".busket-container").hasClass("active")){
        $(".busket-container").addClass("active");
    }
});

$(".busket-container .close-triggrer button").click(function(){
    $(".busket-container").removeClass("active");
    console.log("sdbdb")
});