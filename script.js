// addEventListener('DOMContentLoaded', function() {
//     btnSpecification();
//     //changeImg();
//     showSpecifications();
//     //showImg();
// })

// const btnSpecification = () => {
//     const searchBtnSpec = document.querySelectorAll('.wrapper__block-two_nav_list_item');
//     Array.from(searchBtnSpec).forEach((v) => {
//         v.addEventListener('click', function() {
//             const removeBtnSpec = document.querySelectorAll('.block-two_nav_list_item_active');
//             Array.from(removeBtnSpec).forEach((i) => i.classList.remove('block-two_nav_list_item_active'));
//             v.classList.add('block-two_nav_list_item_active');
//         })
//     })
// }
 

// const showImg = Array.from(document.querySelectorAll('.wrapper__block-two_img'));
// //console.log(showImg);
// const showNav = Array.from(document.querySelectorAll('.nav'));

    

// const showSpecifications = () => {
//     const searchSpec = Array.from(document.querySelectorAll('.wrapper__block-two_nav_list_item'));
//     const searchSpecification = Array.from(document.querySelectorAll('.wrapper__block-one_specificationsALL'));
//     console.log(searchSpec, searchSpecification);
//     searchSpec[0].addEventListener('click', function() {
//         searchSpecification.forEach(v => v.classList.add('wrapper__block-one_specificationsALL-hidden'));      
//         showImg.forEach(v => v.classList.remove('img-active'));
//         searchSpecification[0].classList.remove('wrapper__block-one_specificationsALL-hidden');
//         showImg[0].classList.add('img-active');
//         showNav.forEach(v => v.classList.remove('nav-active'));
//         showNav[0].classList.add('nav-active');
//     })
//     searchSpec[1].addEventListener('click', function() {
//         searchSpecification.forEach(v => v.classList.add('wrapper__block-one_specificationsALL-hidden'));    
//         showImg.forEach(v => v.classList.remove('img-active'));
//         searchSpecification[1].classList.remove('wrapper__block-one_specificationsALL-hidden');
//         showImg[1].classList.add('img-active');
//         showNav.forEach(v => v.classList.remove('nav-active'));
//         showNav[1].classList.add('nav-active');
//     })
//     searchSpec[2].addEventListener('click', function() {
//         searchSpecification.forEach(v => v.classList.add('wrapper__block-one_specificationsALL-hidden'));
//         showImg.forEach(v => v.classList.remove('img-active'));   
//         searchSpecification[2].classList.remove('wrapper__block-one_specificationsALL-hidden');
//         showImg[2].classList.add('img-active');
//         showNav.forEach(v => v.classList.remove('nav-active'));
//         showNav[2].classList.add('nav-active');
//     })    
// }

// const showNavS = (() => {
//     showNav[0].addEventListener('click', () => {
//         showNav.forEach(v => v.classList.remove('nav-active'));
//         showNav[0].classList.add('nav-active');
//     })
//     showNav[1].addEventListener('click', () => {
//         showNav.forEach(v => v.classList.remove('nav-active'));
//         showNav[1].classList.add('nav-active');
//     })
//     showNav[2].addEventListener('click', () => {
//         showNav.forEach(v => v.classList.remove('nav-active'));
//         showNav[2].classList.add('nav-active');
//     })
        
// })()


const initSlider = () => {
    let sliderImg = Array.from(document.querySelectorAll('.wrapper__block-two_img'));
    let sliderArrows = document.querySelectorAll('.wrapper__block-one_nav_arrow');
    let sliderDots = document.querySelectorAll('.nav');
    let sliderSpec = document.querySelectorAll('.wrapper__block-two_nav_list_item');

    initArrows();

    function initArrows () {
        sliderArrows.forEach(arrow => {
            arrow.addEventListener('click', function() {
              let curNumber = +sliderImg.querySelector('.img-active').dataset.index;
              let nexNumber;
              if (arrow.classList.contains('.wrapper__block-one_nav-left')) {
                nexNumber = curNumber === 0? sliderImg.length - 1 : curNumber - 1;
              } else {
                nexNumber = curNumber === sliderImg.length - 1? 0 : curNumber + 1;
              }
            })
        })
    }
}


document.addEventListener("DOMContentLoaded", function() {
    initSlider();
});