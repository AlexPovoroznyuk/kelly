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

$("[data-tab]").click(function(e){
    e.preventDefault;
    var activeTab = $(this).attr("data-tab");
    $(".modal-tab, .modal-auth-form").removeClass("active");
    $(`.modal-tab[data-tab="${activeTab}"]`).addClass("active");
    $(`[data-tab-form="${activeTab}"]`).addClass("active");
})

$(".modal-close").click(function(){
    $(".modal").removeClass("active")
})

$("[data-modal]").click(function(e){
    e.preventDefault;
    var activeModal = $(this).attr("data-modal");
    $(".modal").removeClass("active");
    $(`#${activeModal}`).addClass("active");
})