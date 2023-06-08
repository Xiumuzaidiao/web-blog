// 导航栏js
var nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    // 滚动条不在顶部时的样式
    nav.style.width = '100%';
    nav.style.borderRadius = '0';
    nav.style.top = '0px';
    nav.style.backgroundColor = 'rgba(38, 38, 38, 0.8)';
    nav.style.transition = 'all 1s'; // 添加过渡效果

    // 鼠标悬停时的样式
    nav.addEventListener('mouseover', function() {
      nav.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
    });

    nav.addEventListener('mouseout', function() {
      nav.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
    });
  } else {
    // 滚动条在顶部时的样式
    nav.style.width = '95%';
    nav.style.borderRadius = '15px';
    nav.style.top = '30px';
    nav.style.backgroundColor = 'rgba(51, 51, 51, 0)';
    nav.style.transition = 'all 1s'; // 添加过渡效果

    // 鼠标悬停时的样式
    nav.addEventListener('mouseover', function() {
      nav.style.backgroundColor = 'rgba(51, 51, 51, 1)';
    });

    nav.addEventListener('mouseout', function() {
      nav.style.backgroundColor = 'rgba(51, 51, 51, 0)';
    });
  }
});

