const hamburger = document.querySelector('.hamburger'),
      headerBtmBox = document.querySelector('.header-bottomBox nav'),
      headerTopBox = document.querySelector('.header-container'),
      navLists = document.querySelectorAll('.navList');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerBtmBox.classList.toggle('active');
    headerTopBox.classList.toggle('active');
    if(hamburger.classList.contains('active')){
        document.querySelector('body').style.overflowY = 'hidden';
    }else{
        document.querySelector('body').style.overflowY = 'scroll';
    }
})
navLists.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    headerBtmBox.classList.remove('active');
    headerTopBox.classList.remove('active');
    if(!hamburger.classList.contains('active')){
        document.querySelector('body').style.overflowY = 'scroll';
    }
}))


