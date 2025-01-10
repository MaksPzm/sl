addEventListener('DOMContentLoaded', function() {
    btnSpecification();
    changeImg();
    showSpecifications();
})

const btnSpecification = () => {
    const searchBtnSpec = document.querySelectorAll('.wrapper__block-two_nav_list_item');
    Array.from(searchBtnSpec).forEach((v) => {
        v.addEventListener('click', function() {
            const removeBtnSpec = document.querySelectorAll('.block-two_nav_list_item_active');
            Array.from(removeBtnSpec).forEach((i) => i.classList.remove('block-two_nav_list_item_active'));
            v.classList.add('block-two_nav_list_item_active');
        })
    })
}

const changeImg = () => {
    const searchImg = this.document.querySelectorAll('.wrapper__block-two_img');
    Array.from(searchImg) 
    console.log(searchImg);
    
}

//  const showSpecifications = () => {
//      const specification = querySelectorAll('.wrapper__block-one_specificationsALL');
//      Array.from(specification).forEach(i => {
//          i.classList.add('.wrapper__block-one_specificationsALL-hidden');
//          i.classList.remove('wrapper__block-one_specificationsALL-hidden');
//      })
//  }


const showSpecifications = () => {
    const searchSpec = Array.from(document.querySelectorAll('.wrapper__block-two_nav_list_item'));
    const searchSpecification = Array.from(document.querySelectorAll('.wrapper__block-one_specificationsALL'));
    console.log(searchSpec, searchSpecification);
    
    
}
