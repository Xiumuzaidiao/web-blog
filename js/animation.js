window.addEventListener('load', function() {
  var container = document.querySelector('.container');
  var content = document.querySelector('.content');
  container.style.opacity = '0'; // 初始状态设置为透明
  container.style.transform = 'translateY(-100%)'; // 初始状态设置为位于上方

  setTimeout(function() {
    container.style.transition = 'opacity 1.5s ease-in-out, transform 1s ease-in-out'; // 添加过渡效果
    container.style.opacity = '1'; // 设置结束状态为完全显现
    container.style.transform = 'translateY(0)'; // 设置结束状态为位于原始位置
	
  }, 100);
});


window.addEventListener('load', function() {
  var backgroundCount = 31; // 背景图像的总数
  var displayPics = document.querySelectorAll('.display-pic'); // 获取所有 display-pic 元素

  // 遍历每个 display-pic 元素
  displayPics.forEach(function(displayPic) {
    var randomIndex = Math.floor(Math.random() * backgroundCount) + 1; // 生成 1 到 backgroundCount 的随机整数
    displayPic.src = './img/background' + randomIndex + '.jpg'; // 设置当前 display-pic 元素的图片路径
  });
});


 window.addEventListener('load', function() {
    var exhibits = document.querySelectorAll('.exhibit');
    var introduce = document.querySelectorAll('.introduce');
	var date = document.querySelectorAll('.date');
	var contentTitle = document.querySelectorAll('.content-title');
    var postMeta = document.querySelectorAll('.post-meta');
	var postMain = document.querySelectorAll('.post-main');
	for (var i = 0; i < exhibits.length; i++) {
      if (i % 2 === 0) {
        exhibits[i].classList.add('left');
		introduce[i].classList.add('right');
		date[i].classList.add('right');
		contentTitle[i].classList.add('right');
		postMeta[i].classList.add('right');
		postMain[i].classList.add('right');
      } else {
        exhibits[i].classList.add('right');
		introduce[i].classList.add('left');
		date[i].classList.add('left');
		contentTitle[i].classList.add('left');
		postMeta[i].classList.add('left');
		postMain[i].classList.add('left');
      }
    }
	
  });
