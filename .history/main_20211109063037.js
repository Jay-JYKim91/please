// Progressive loading
const observer = lozad('.lozad', {
    rootMargin: '1500px 0px'
  });
  observer.observe();

// Foot에 현재 연도 표기
const year = document.querySelector('#currentYear');
let now = new Date();
let currentYear = now.getFullYear();
year.innerText = currentYear;

// 포트폴리오 메뉴 작은 버전
const customOffset = document.getElementById('portfolio__custom').getBoundingClientRect().top;
const readymadeOffset = document.getElementById('portfolio__readymade').getBoundingClientRect().top;
const processOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().top;
const finishOffset = document.querySelector('.about').getBoundingClientRect().top;

console.log(customOffset);
console.log(readymadeOffset);
console.log(processOffset);
console.log(finishOffset);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // if (document.documentElement.scrollTop < processOffset) {
  //   document.getElementById("menu_education-process").style.top = "-80px";
  // } else 
  if (document.documentElement.scrollTop > processOffset) {
    document.getElementById("menu_education-process").style.top = "0";
  } else if (document.documentElement.scrollTop > readymadeOffset) {
    document.getElementById("menu_education-process").style.top = "-80px";
    document.getElementById("menu_readymade").style.top = "0";
  } else if (document.documentElement.scrollTop > customOffset) {
    document.getElementById("menu_readymade").style.top = "-80px";
    document.getElementById("menu_custom").style.top = "0";
  } else {
    document.getElementById("menu_custom").style.top = "-80px";
  }
}