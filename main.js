const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', function () {
  console.log(themeToggle);

  document.body.classList.toggle('dark-theme');
});
