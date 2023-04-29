const hamburger = document.querySelector('.hamburger'),
      headerBtmBox = document.querySelector('.header-bottomBox nav'),
      headerTopBox = document.querySelector('.header-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerBtmBox.classList.toggle('active');
    headerTopBox.classList.toggle('active');
    if(hamburger.classList.contains('active')){
        document.querySelector('body').style.overflowY = 'hidden';
        // 질문: 한번 hamburger 실행하고 나오면 active class 해제됐음에도 
        // 새로고침해야 scroll 생김. 새로고침 안하는 방법  
    }
    
})