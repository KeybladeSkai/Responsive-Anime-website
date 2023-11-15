// j-query
// $(document).ready(function(){
//   $('#menu').click(function(){
//     $(this).toggleClass('fa-times');
//   });
// });

const menuToggle = document.getElementById('menu');
const showcase = document.querySelector('.container');
const showcase2 = document.querySelector('.close');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('fa-times');
  showcase.classList.toggle('active');
  navbar.classList.toggle('active'); // Toggle the 'active' class to display or hide the navbar
});

showcase2.addEventListener('click', () => {
  menuToggle.classList.remove('fa-times');
  showcase.classList.remove('active');
  navbar.classList.remove('active'); // Remove the 'active' class to hide the navbar
});


