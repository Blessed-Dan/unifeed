const navigation = document.querySelectorAll('.navbar');
navigation.forEach((item) => item.addEventListener('click', function () {
  this.classList.toggle("nav--expanded");
})
);

