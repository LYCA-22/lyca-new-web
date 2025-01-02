const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const blurBg = document.getElementById('blurBg');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  sideMenu.classList.toggle('open');
  blurBg.classList.toggle('active');
});

// 點擊霧化背景時也可關閉選單
blurBg.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  sideMenu.classList.remove('open');
  blurBg.classList.remove('active');
});