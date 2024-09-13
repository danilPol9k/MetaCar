window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 410 || document.documentElement.scrollTop > 410) {
        document.querySelector(".button-offers").style.display = "block";
        document.querySelector(".nav-list--hide").style.display = "none"
    } else {
        document.querySelector(".button-offers").style.display = "none";
        document.querySelector(".nav-list--hide").style.display = "block"

    }
}

const menuToggle = document.querySelector('.menu-toggle')
const menuList = document.querySelector('.burger-wrapper')

menuToggle.addEventListener('click', function () {
    if (menuList.style.display === 'none' || menuList.style.display === '') {
        menuList.style.display = 'block'
        menuToggle.style.backgroundImage = "url(/images/close_button.png)"
        menuToggle.style.width = '10.51px'
        menuToggle.style.height = '10.51px'
    } else {
        menuList.style.display = 'none'
        menuToggle.style.backgroundImage = "url(/images/burger_button.png)"
        menuToggle.style.width = '21px'
        menuToggle.style.height = '17px'
    }
})