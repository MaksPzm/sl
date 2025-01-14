function initSlider() {
    let sliderImg = document.querySelector('.wrapper__block-two_elem-img');
    let sliderImages = Array.from(document.querySelectorAll('.wrapper__block-two_img'));
    let sliderArrows = document.querySelectorAll('.wrapper__block-one_nav_arrow');
    let sliderDots = document.querySelector('.wrapper__block-one_nav-conteiner');
    let sliderSpecEx = document.querySelector('.wrapper__block-two_nav');
    let sliderSpecification = document.querySelectorAll('.wrapper__block-one_specificationsALL');

    initArrows();
    initImages();
    initDots();
    initSpecificEx();

    function initImages() {
      sliderImages.forEach((item, index) => {
        item.dataset.index = index;
        item.classList.add(`n${index}`);
      })
    }

    function initArrows () {
        sliderArrows.forEach(arrow => {
            arrow.addEventListener('click', function() {
              let curNumber = +sliderImg.querySelector('.img-active').dataset.index;
              
              
              let nexNumber;
              if (arrow.classList.contains('wrapper__block-one_nav-left')) {
                nexNumber = curNumber === 0? sliderImages.length - 1 : curNumber - 1;
              } else {
                nexNumber = curNumber === sliderImages.length - 1? 0 : curNumber + 1;
              }
              console.log(curNumber);
              console.log(nexNumber);
              
              moveSlider(nexNumber);
            })
        })
    }

    function moveSlider(num) {
      sliderImg.querySelector('.img-active').classList.remove('img-active');
      sliderImg.querySelector('.n' + num).classList.add('img-active');
      
      sliderDots.querySelector('.nav-active').classList.remove('nav-active');
      sliderDots.querySelector('.nav' + num).classList.add('nav-active');

      sliderSpecEx.querySelector('.block-two_nav_list_item_active').classList.remove('block-two_nav_list_item_active');
      sliderSpecEx.querySelector('.item' + num).classList.add('block-two_nav_list_item_active');


      sliderSpecification.forEach(item => {
        item.classList.add('wrapper__block-one_specificationsALL-hidden');
      })
      let curSpec = Array.from(sliderSpecification);
      document.querySelector('.specificationsALL' + num).classList.remove('wrapper__block-one_specificationsALL-hidden');
    }

    function initDots() {
      sliderDots.querySelectorAll('.nav').forEach(dot => {
        dot.addEventListener('click', function() {
          moveSlider(this.dataset.name);
        })
      })
    }

    function initSpecificEx() {
      sliderSpecEx.querySelectorAll('.wrapper__block-two_nav_list_item').forEach(spec => {
        spec.addEventListener('click', function() {
          moveSlider(this.dataset.name);
        })
      })
    }
}


document.addEventListener("DOMContentLoaded", function() {
    initSlider();
});