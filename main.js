$(document).ready(function () {
  var $slider = $('.slider');

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: true,
  });
});
 
$('.slider').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

function userInput() {
  var input1 = document.querySelector("#input1 input");
  if (input1.value.length < 5) {
    document.querySelector("#input1 span").style.display = "block";
    document.querySelector("#input1").classList.add("invalid");
  }
  else {
    document.querySelector("#input1 span").style.display = "none";
    document.querySelector("#input1").classList.remove("invalid");
  }

  var input2 = document.querySelector("#input2 input");
  if (input2.value.length < 5) {
    document.querySelector("#input2 span").style.display = "block";
    document.querySelector("#input2").classList.add("invalid");
  }
  else {
    document.querySelector("#input2 span").style.display = "none";
    document.querySelector("#input2").classList.remove("invalid");
  }
}
function logIn() {
  window.open("index.html");
}
function cartIn() {
  window.open("cart.html")
}

// function doneIn(){
//   if(this===clicked){
//     document.querySelector(".order").style.display="block";
//   }
// }

$(document).ready(function () {
  $(".btn2").click(function () {
    $(".order").show()
  })
})