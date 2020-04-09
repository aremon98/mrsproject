
  $(window).on("load", function(){
    $("#preloader").fadeOut();
  });



$(".navbar a, .next-section-link a, a.top-to-home").on("click", function(e) {
  if (this.hash !== " ") {
    e.preventDefault();
    const hash = $(this.hash);
    $("html, body").animate(
      { scrollTop: $(hash).offset().top },
      1500,
      "easeInOutExpo"
    );
  }
});

var $projectitems = $(".project-items").isotope({
  itemSelector: ".item",
  percentPosition: true,
  masonry: {
    columnWidth: ".item"
  }
});
$(".project-catagory-select").on("click", "li", function() {
  var filterValue = $(this).attr("data-filter");
  $projectitems.isotope({ filter: filterValue });
});

$(".project-catagory-select li").on("click", function() {
  $(".project-catagory-select li").removeClass("active-catagory");
  $(this).addClass("active-catagory");
});
$(window).on("scroll", function() {
  
  $(window).scrollTop() >= 300
  
    ? $(".top-to-home").removeClass("d-none")
    : $(".top-to-home").addClass("d-none");
    // ? $(".sticky").addClass("stickyadd")
    // : $(".sticky").removeClass("stickyadd");
  $(window).scrollTop() >= 90
    ? $(".sticky").addClass("stickyadd")
    : $(".sticky").removeClass("stickyadd");
});
$(".popup").magnificPopup({ type: "image",
  closeOnContentClick: true,
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  }
});



// Typed Text
$(".element").each(function(){
  var $this = $(this);
  $this.typed({
  strings: $this.attr('data-elements').split(','),
  typeSpeed: 100,
  backDelay: 3000
  });
});


var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.fa-arrow-right',
    prevEl: '.fa-arrow-left',
  },
});







$('nav').on('click', 'button', function(){
  if($('nav').hasClass('active-nav')){
    $('nav').removeClass('active-nav');
  } else {
    $('nav').addClass('active-nav');
  }
});