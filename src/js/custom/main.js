$(".basket-btn").click(function(){
    var busket = $(this).attr("data-open");
    if(!$(`[data-busket='${busket}']`).hasClass("active")){
        $(`[data-busket]`).removeClass("active");
        $(`[data-busket='${busket}']`).addClass("active");
        $("body").addClass("modal-open");
    }
    else{
        $(`[data-busket='${busket}']`).removeClass("active"); 
        $("body").removeClass("modal-open");
    }
    console.log(`[data-busket='${busket}']`)
});

$(".busket-container .close-triggrer button").click(function(){
    $(".busket-container").removeClass("active");
    $("body").removeClass("modal-open");
});


$(".search-btn").click(function(){
    if(!$(".search-container").hasClass("active")){
        $(".search-container").addClass("active");
    }
    else{
        $(".search-container").removeClass("active");
    }
});

$(".search-close-btn").click(function(){
    $(".search-container").removeClass("active");
   
});


$(".category-item").mouseenter(function(){
    $(".category-item").removeClass("hover");
    $(this).addClass("hover")
});
$(".category-item").click(function(){
    $(".category-item").removeClass("hover");
    $(this).addClass("hover")
});

$(".catalog-trigger button").click(function(){
    if(!$(".menu").hasClass("open-catalog")){
    $(".menu").addClass("open-catalog");
    $(".catalog").addClass("active");
    $("body").addClass("modal-open");
}
else{
    $(".menu").removeClass("open-catalog");
    $(".catalog").removeClass("active");
    $("body").removeClass("modal-open");
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
    $("body").addClass("modal-open");
})

$(".modal-close").click(function(){
    $(".modal").removeClass("active");
    $("body").removeClass("modal-open");
})

$("[data-modal]").click(function(e){
    e.preventDefault();
    var activeModal = $(this).attr("data-modal");
    $(".modal").removeClass("active");
    $(`#${activeModal}`).addClass("active");
    $("body").addClass("modal-open");
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
    $('.nselect-1').nSelect({
        theme: 'custom-sort-dropdown'
    }); 
    console.log("dgseg")
$(".owl-carousel").owlCarousel({
    items : 4,
    itemsDesktop :[1199,3],
    itemsDesktopSmall:[979,3],
    itemsMobile: [479,2],
    navigation: true,
    navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    
});

$(".offer-week").owlCarousel({
    items : 2,
    itemsDesktop :[1199,2],
    itemsMobile: [479,1],
    navigation: true,
    navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    
});
});

$(".lang button").click(function(){
    if(!($(this).closest(".lang").hasClass("opened"))){
      $(this).closest(".lang").addClass("opened");  
    }
    else{
        $(this).closest(".lang").removeClass("opened");  
    }
    
})

$(".more-btn").click(function(){
    var descrParrent = $(this).closest(".descript");
    var fullHeight = descrParrent.find(".descript-inner").innerHeight();
    console.log(descrParrent)
    console.log(fullHeight)
    if(!(descrParrent.find(".descript-outer").hasClass("opened"))){
descrParrent.find(".descript-outer").addClass("opened");
    descrParrent.find(".descript-outer").css("height", `${fullHeight}px`)
    }
    else{
        descrParrent.find(".descript-outer").removeClass("opened");
        descrParrent.find(".descript-outer").css("height", ``) 
    }
})


$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});