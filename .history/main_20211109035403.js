// Progressive loading
const observer = lozad('.lozad', {
    rootMargin: '700px 0px'
  });
  observer.observe();

// Foot에 현재 연도 표기
const year = document.querySelector('#currentYear');
let now = new Date();
let currentYear = now.getFullYear();
year.innerText = currentYear;

// 포트폴리오 메뉴 작은 버전
const customOffset = document.getElementById('portfolio__custom').offsetTop;
const readymadeOffset = document.getElementById('portfolio__readymade').offsetTop;
const processOffset = document.getElementById('portfolio__education-process').offsetTop;
console.log(customOffset);
console.log(readymadeOffset);
console.log(processOffset);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3650 || document.documentElement.scrollTop > 3650) {
    document.getElementById("menu_custom").style.top = "0";
  } else {
    document.getElementById("menu_custom").style.top = "-80px";
  }
}