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
    $(".search-container").removeClass("active");
   
});


$(".category-item").mouseenter(function(){
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
    e.preventDefault();
    var activeTab = $(this).attr("data-tab");
    $(".modal-tab, .modal-auth-form").removeClass("active");
    $(`.modal-tab[data-tab="${activeTab}"]`).addClass("active");
    $(`[data-tab-form="${activeTab}"]`).addClass("active");
})

$(".modal-close").click(function(){
    $(".modal").removeClass("active")
})

$("[data-modal]").click(function(e){
    e.preventDefault();
    var activeModal = $(this).attr("data-modal");
    $(".modal").removeClass("active");
    $(`#${activeModal}`).addClass("active");
})
$(".stars-item input").change(function(){
    var selectRating = $(this).attr('value');
    $(this).closest(".stars-wrap").attr("data-rating", selectRating);
    $(this).closest(".stars-wrap").find(".stars-item").removeClass("active");
    $(this).closest(".stars-item").addClass("active");
    $(this).closest(".stars-wrap").find(".current-rating").html(`(${selectRating})`);
})
$(document).ready(function(){
    $(".stars-wrap").each(function(){
        var rating = $(this).attr('data-rating');
        $(this).find(`input[value='${rating}']`).closest(".stars-item").addClass("active");
        $(this).find(".current-rating").html(`(${rating})`);
    })

    
})
    
$(document).ready(function() {
   
$(".owl-carousel").owlCarousel({
    items : 4,
    itemsDesktop :[1199,3],
    itemsDesktopSmall:[979,3],
    navigation: true,
    navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    
});

$(".offer-week").owlCarousel({
    items : 2,
    itemsDesktop :[1199,2],

    navigation: true,
    navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    
});
});

