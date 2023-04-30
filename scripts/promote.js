const hamburger = document.querySelector('.hamburger'),
      headerCon = document.querySelector('.header-container nav'),
      navLists = document.querySelectorAll('.navList');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerCon.classList.toggle('active');
    if(hamburger.classList.contains('active')){
        document.querySelector('body').style.overflowY = 'hidden';
    }else{
        document.querySelector('body').style.overflowY = 'scroll';
    }
})
navLists.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    headerCon.classList.remove('active');
    if(!hamburger.classList.contains('active')){
        document.querySelector('body').style.overflowY = 'scroll';
    }
}))
