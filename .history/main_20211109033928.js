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

//
window.addEventListener('scroll', console.log(document.body.scrollTop));
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
    document.getElementById("menu_custom").style.top = "0";
  } else {
    document.getElementById("menu_custom").style.top = "-80px";
  }
}