function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    
    
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  function initializeClocked(id, endtime) {
    var cloc = document.getElementById(id);
    var daysSpa = cloc.querySelector('.day');
    var hoursSpa = cloc.querySelector('.hour');
    var minutesSpa = cloc.querySelector('.minute');
    var secondsSpa = cloc.querySelector('.second');
    
    
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpa.innerHTML = t.days;
      hoursSpa.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpa.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpa.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  function initializeClockes(id, endtime) {
    var clo = document.getElementById(id);
    var daysSp = clo.querySelector('.da');
    var hoursSp = clo.querySelector('.hou');
    var minutesSp = clo.querySelector('.minut');
    var secondsSp = clo.querySelector('.secon');
    
    
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSp.innerHTML = t.days;
      hoursSp.innerHTML = ('0' + t.hours).slice(-2);
      minutesSp.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSp.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  function initializeClocky(id, endtime) {
    var cl = document.getElementById(id);
    var daysS = cl.querySelector('.d');
    var hoursS = cl.querySelector('.ho');
    var minutesS = cl.querySelector('.minu');
    var secondsS = cl.querySelector('.seco');
    
    
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysS.innerHTML = t.days;
      hoursS.innerHTML = ('0' + t.hours).slice(-2);
      minutesS.innerHTML = ('0' + t.minutes).slice(-2);
      secondsS.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  function initializeClockyd(id, endtime) {
    var c = document.getElementById(id);
    var days = c.querySelector('.de');
    var hours = c.querySelector('.he');
    var minutes = c.querySelector('.me');
    var seconds = c.querySelector('.si');
    
    
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      days.innerHTML = t.days;
      hours.innerHTML = ('0' + t.hours).slice(-2);
      minutes.innerHTML = ('0' + t.minutes).slice(-2);
      seconds.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  function initializeClockysed(id, endtime) {
    var k = document.getElementById(id);
    var day = k.querySelector('.dm');
    var hour = k.querySelector('.hm');
    var minute = k.querySelector('.mm');
    var second = k.querySelector('.sm');
    
    
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      day.innerHTML = t.days;
      hour.innerHTML = ('0' + t.hours).slice(-2);
      minute.innerHTML = ('0' + t.minutes).slice(-2);
      second.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline="January 01 2023 00:00:00 GMT+0300"; //for Ukraine
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);
  initializeClocked('countdown-2', deadline);
  initializeClockes('countdown-3', deadline);
  initializeClocky('countdown-4', deadline);
  initializeClockyd('countdown-5', deadline);
  initializeClockysed('countdown-6', deadline);
  
  
  document.querySelectorAll('.heart, .heart-button').forEach(button => button.addEventListener('click', e => button.classList.toggle('active')));

  document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
);
$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    speed: 1000,
    infinite: false,
    draggable: false,
  });
});

// const collectionBtn = document.querySelector('.collection__btn');
// const collectionHref = document.querySelector('.collection__href');

// collectionBtn.addEventListener('click', (event) => {
//   const target = event.target;

//   if (collectionHref.target)  {
//     href.innerHTML = 'followed';
//   }
// });
// document.querySelector('.collection__href').onclick = function() {
//   this.textContent = 'Followed';
// };
const collectionHref = document.querySelectorAll('.collection__button a');

collectionHref.forEach(item => {
  item.addEventListener('click', (event) => {
    item.textContent = 'Followed';
    item.style.backgroundColor = '#75b175';
  });
});
// var collectionBtn = document.querySelectorAll('.collection__button');
// var collectionHref = document.querySelectorAll('.collection__href');

// function btnStyle() {
//   collectionBtn.style.backgroundColor = 'yellow';
//   collectionBtn.textContent = 'Followed';
// } 
// collectionHref.forEach(btn => {
//   btn.addEventListener('click', btnStyle);
// });