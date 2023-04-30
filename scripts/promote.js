// hamburger menu
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

// advertise slider
const leftArrows = document.querySelectorAll('.left-arrow'),
      rightArrows = document.querySelectorAll('.right-arrow'),
      counters = document.querySelectorAll('.counter'),
      row01 = document.querySelector('#adRow01'),
      row02 = document.querySelector('#adRow02'),
      boxes1 = document.querySelectorAll('.advertise_box .row01 .box1'),
      boxes2 = document.querySelectorAll('.advertise_box .row02 .box2'),
      cnt1 = document.querySelector('#cnt1'),
      cnt2 = document.querySelector('#cnt2');

let cur1 = 0;
let cur2 = 0;
count(cur1, cnt1);
rightArrows[0].addEventListener('click', () => {
    if(cur1 > -190){
        cur1 = next(boxes1, cur1);
    }
    count(cur1, cnt1);
})
rightArrows[1].addEventListener('click', () => {
    if(cur2 > -190){
        cur2 = next(boxes2, cur2);
    }
    count(cur2, cnt2);
})
leftArrows[0].addEventListener('click', () => {
    if(cur1 < 0){
        cur1 = prev(boxes1, cur1);
    }
    count(cur1, cnt1);
})
leftArrows[1].addEventListener('click', () => {
    if(cur2 < 0){
        cur2 = prev(boxes2, cur2);
    }
    count(cur2, cnt2);
})

function count(cur, cnt){
    if(cur == 0){
        cnt.innerHTML = '1/3';
    }else if(cur == -95){
        cnt.innerHTML = '2/3';
    }else if(cur == -190){
        cnt.innerHTML = '3/3'
    }
}
function next(boxes, cur){
    cur = cur - 95;
    boxes.forEach(function(b){
        b.style.left = cur + '%';
    })
    return cur;
}
function prev(boxes, cur){
    cur = cur + 95;
    boxes.forEach(function(b){
        b.style.left = cur + '%';
    })
    return cur;
}
