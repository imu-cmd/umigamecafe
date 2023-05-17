$(function() {
  if (window.matchMedia( "(min-width: 450px)" ).matches) {
    
    $('#logo').hide().fadeIn(5000);

    $('.scrolldown4').hide().fadeIn(8000);
    $('.scrolldown4').fadeOut(3000);

    var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {  
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' 
        }, 300); 
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' 
        }, 300); 
      }
    }
  });
  
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
  
  
  $(".list #l1").on("mouseover", ef);
  $(".list #l1").on("mouseout", rt);
  $(".list #l2").on("mouseover", ef);
  $(".list #l2").on("mouseout", rt);
  $(".list #l3").on("mouseover", ef);
  $(".list #l3").on("mouseout", rt);
  $(".list #l4").on("mouseover", ef);
  $(".list #l4").on("mouseout", rt);
  $(".list #l5").on("mouseover", ef);
$(".list #l5").on("mouseout", rt);
$(".list #l6").on("mouseover", ef);
$(".list #l6").on("mouseout", rt);

$(".list #l1").on("mouseover", function(){
  $(".list #l1").css({
    color: "#90f0f9",
    fontSize: "40px",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l2").on("mouseover", function(){
  $(".list #l2").css({
    color: "#ed6363",
    fontSize: "40px",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l3").on("mouseover", function(){
  $(".list #l3").css({
    color: "#fab56c",
    fontSize: "40px",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l4").on("mouseover", function(){
  $(".list #l4").css({
    color: "#ff29ea",
    fontSize: "40px",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
  });
})
.on("mouseout",fla);
$(".list #l5").on("mouseover", function(){
  $(".list #l5").css({
    color: "#f8ff29",
    fontSize: "40px",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l6").on("mouseover", function(){
  $(".list #l6").css({
    color: "#90ff72",
    fontSize: "40px",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);




function ef (){
  $(this).css({
    background: "linear-gradient(138deg, #FFFFFF 0%, #38AEF3 41%)",
    // background: "url(./image/AnimatedShape.svg)",
    boxShadow: "none",
    opacity: "0.9"
  });
}
function rt (){
  $(this).css({
    background: "",
    boxShadow: "",
    
    opacity: ""
  });
}
//   $(this).css({
  //     color:"#f00",
  //     fontSize:"25px",
  //     textShadow: "4px 4px 3px 0px rgba(0, 0, 0, 0.57)",
  //   });
  // }
  
  function fla (){
    $(this).css({
      color:"",
      textShadow: "",
      fontSize:""
    });
  }
  //############
  $('.slider').slick({
    autoplay: true,       //自動再生
    autoplaySpeed: 2000,  //自動再生のスピード
    speed: 800,           //スライドするスピード
    dots: true,           //スライド下のドット
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
  });
  
  $('.slider2').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 9000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
  
  // function fl (){
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
  // caffeeページ#############################################################
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
      slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
    $('.carousel-item').eq(prev).removeClass('active');
    $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){
        
      },800);
      
      
      
    }
    
    const break_point = 480;
function gallery_img_resize() {
  let $window = $(window);
  let $lightbox_img = $('.lightbox-container ul li img');
  let default_height = 230;
  if($window.width() <= break_point) {
    $lightbox_img.css({
      'height': `${$lightbox_img.width()}px`
        });
      } else {
        $lightbox_img.css({
          'height': `${default_height}px`
        });
      }
    }
$(window).on('load resize', function() {
  gallery_img_resize();
});


window.onload = function() {
  var rellax = new Rellax('.rellax');
}
//##################################################################################
} else {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });


  $(".list #l1").on("mouseover", ef);
  $(".list #l1").on("mouseout", rt);
  $(".list #l2").on("mouseover", ef);
  $(".list #l2").on("mouseout", rt);
  $(".list #l3").on("mouseover", ef);
  $(".list #l3").on("mouseout", rt);
  $(".list #l4").on("mouseover", ef);
  $(".list #l4").on("mouseout", rt);
  $(".list #l5").on("mouseover", ef);
$(".list #l5").on("mouseout", rt);
$(".list #l6").on("mouseover", ef);
$(".list #l6").on("mouseout", rt);

$(".list #l1").on("mouseover", function(){
  $(".list #l1").css({
    color: "#90f0f9",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l2").on("mouseover", function(){
  $(".list #l2").css({
    color: "#ed6363",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l3").on("mouseover", function(){
  $(".list #l3").css({
    color: "#fab56c",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l4").on("mouseover", function(){
  $(".list #l4").css({
    color: "#ff29ea",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
  });
})
.on("mouseout",fla);
$(".list #l5").on("mouseover", function(){
  $(".list #l5").css({
    color: "#f8ff29",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);
$(".list #l6").on("mouseover", function(){
  $(".list #l6").css({
    color: "#90ff72",
    textShadow: "1px 1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px -1px 0 rgb(255, 255, 255),-1px -1px 0 rgb(255, 255, 255)"
    
  });
})
.on("mouseout",fla);


function ef (){
  $(this).css({
    background: "linear-gradient(138deg, #FFFFFF 0%, #38AEF3 41%)",
    // background: "url(./image/AnimatedShape.svg)",
    boxShadow: "none",
    opacity: "0.9"
  });
}
function rt (){
  $(this).css({
    background: "",
    boxShadow: "",
    
    opacity: ""
  });
}

function fla (){
  $(this).css({
    color:"",
    textShadow: "",
    fontSize:""
  });
}

$('.slider').slick({
  autoplay: true,       //自動再生
  autoplaySpeed: 2000,  //自動再生のスピード
  speed: 800,           //スライドするスピード
  dots: true,           //スライド下のドット
  arrows: true,         //左右の矢印
  infinite: true,       //永久にループさせる
});

$('.slider2').slick({
  autoplay: true, // 自動でスクロール
  autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
  speed: 9000, // スライドが流れる速度を設定
  cssEase: "linear", // スライドの流れ方を等速に設定
  slidesToShow: 4, // 表示するスライドの数
  swipe: false, // 操作による切り替えはさせない
  arrows: false, // 矢印非表示
  pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
  pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
      }
    }
  ]
});

var appear = false;
var pagetop = $('#page_top');
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {  
    if (appear == false) {
      appear = true;
      pagetop.stop().animate({
        'bottom': '50px' 
      }, 300); 
    }
  } else {
    if (appear) {
      appear = false;
      pagetop.stop().animate({
        'bottom': '-50px' 
      }, 300); 
    }
  }
});

pagetop.click(function () {
  $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
  return false;
});

//coffeepage##############################################################
$('.carousel-item').eq(0).addClass('active');
var total = $('.carousel-item').length;
var current = 0;
$('#moveRight').on('click', function(){
  var next=current;
  current= current+1;
  setSlide(next, current);
});
$('#moveLeft').on('click', function(){
  var prev=current;
  current = current- 1;
  setSlide(prev, current);
});
function setSlide(prev, next){
  var slide= current;
  if(next>total-1){
    slide=0;
    current=0;
  }
  if(next<0){
    slide=total - 1;
    current=total - 1;
  }
  $('.carousel-item').eq(prev).removeClass('active');
  $('.carousel-item').eq(slide).addClass('active');
    setTimeout(function(){
      
    },800);
    
    
    
  }
  


}//elseout
});//funcout