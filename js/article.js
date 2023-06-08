window.addEventListener('load', function() {
  var articleTitle = document.querySelector('.article-title');
  var main = document.querySelector('.main');
  articleTitle.style.opacity = '0'; // 初始状态设置为透明
  main.style.opacity = '0'; 
  articleTitle.style.transform = 'translateY(-100%)'; // 初始状态设置为位于上方
  main.style.transform = 'translateY(100%)';// 初始状态设置为位于下方

  setTimeout(function() {
   articleTitle.style.transition = 'opacity 1.5s ease-in-out, transform 1s ease-in-out'; // 添加过渡效果
   articleTitle.style.opacity = '1'; // 设置结束状态为完全显现
   articleTitle.style.transform = 'translateY(0)'; // 设置结束状态为位于原始位置
	main.style.transition = 'opacity 2s ease-in-out, transform 1.5s ease-in-out'; // 添加过渡效果
	main.style.opacity = '1'; // 设置结束状态为完全显现
	main.style.transform = 'translateY(0)'; // 设置结束状态为位于原始位置
  }, 100);
});
