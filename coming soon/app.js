
// function convertRemToPixels(rem) {
//     return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
// }

// var windowWidth = window.innerWidth;
// var horLength = document.querySelector(".element-wrapper").scrollWidth;
// var distFromTop = document.querySelector(".horizontal-section").offsetTop;
// var scrollDistance = distFromTop + horLength - windowWidth;
// var editLength = horLength - convertRemToPixels(90)

// let card1 = document.querySelector(".card-1");
// let card2 = document.querySelector(".card-2");
// let card2Leng = document.querySelector(".card-2").offsetHeight;
// var articleHorLength = document.querySelector(".article").scrollWidth - 200;
// let card1DistTop = document.querySelector(".card-1").offsetTop + editLength - convertRemToPixels(150);
// let card2DistTop = document.querySelector(".card-2").offsetTop + editLength;
// var articelScrollDistance = card1DistTop + articleHorLength;

// document.querySelector(".horizontal-section").style.height = editLength + "px";
// document.querySelector(".scroll-content").style.height = card2Leng + "px";

// window.onscroll = function () {
//     var scrollTop = window.pageYOffset;

//     if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
//         document.querySelector(".element-wrapper").style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
//     }

//     if (scrollTop >= card1DistTop && scrollTop <= document.body.clientHeight) {
//         card1.style.transform = "translateY(-" + ((scrollTop - card1DistTop) * .45) + "px)";
//         // card2.style.transform = "translateY(-" + ((scrollTop - card2DistTop) * 0.5) + "px)";
//     }
// }

// var aboutSection = document.querySelector(".about-me");
// let spacer = 0
// let spacerUP = 0
// let i = 0
// const cars = ["url('assets/memoji (4).png')", "url('assets/memoji (1).png')", "url('assets/memoji (3).png')", "url('assets/memoji (2).png')", "url('assets/memoji (5).png')"];

// aboutSection.addEventListener('mousemove', function (e) {
//     if (i > cars.length - 1) {
//         i = 0
//     }
//     let circle = document.createElement('span');
//     let x = e.offsetX;
//     let y = e.offsetY;
//     let jarak = aboutSection.offsetTop;
//     circle.style.left = x + "px";
//     circle.style.top = jarak + y + "px";
//     let size = Math.random() * 100;
//     circle.style.backgroundImage = cars[i];
//     if (x >= spacer + convertRemToPixels(25) || x <= spacer - convertRemToPixels(25) || y >= spacerUP + convertRemToPixels(20) || y <= spacerUP - convertRemToPixels(20)) {
//         spacer = 0
//         spacerUP = 0
//         aboutSection.appendChild(circle);
//         spacer += x
//         spacerUP += y
//         i++
//     }
//     setTimeout(function () {
//         circle.remove();
//     }, 1800);
// });

AOS.init({ duration: 1200, });

