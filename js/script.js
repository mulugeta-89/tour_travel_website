// function sub() {
//     let menu = document.querySelector('#menu-btn');
//     let navbar = document.querySelector('.header .navbar');
//     console.log(menu);

// // menu.onclick = () => {
// //   menu.classList.toggle("fa-times");
// //   return 0;
// // };
// }
// sub()
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
      640:{
        slidesperviews:1,
      },
      768:{
        slidesperviews:2,
      },
      1024:{
        slidesperviews:1,
      },
    },
  });
let loaMoreBtn=document.querySelector('.package .load-more .btn');
let currentItems=3;
loadMoreBtn.onclick=()=>{
   let boxes=[...document.querySelectorAll('.packages' .box-container .box)];
    for(var i=currentItem; i<currentItem +3; i++ ){
      boxes[i].style.display='inline-block';
    };
    currentItem +=3;
    if(currentItem >=boxes.length){
      loadMoreBtn.style.display='none';
    }
}
