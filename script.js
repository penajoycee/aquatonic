document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  container.style.opacity = 1;
  container.style.transform = 'translateX(0)';
});

document.addEventListener('DOMContentLoaded', function() {
  const container1 = document.querySelector('.container1');
  container1.style.opacity = 1;
  container1.style.transform = 'translateX(0)';    
});

document.addEventListener('DOMContentLoaded', function() {
  const photo = document.getElementById('photo');
  photo.style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", function(event) {
  var plants = document.getElementById("plants");
  plants.style.opacity = 1;
  var fishes = document.getElementById("fishes");
  var accessory = document.getElementById("accessory");

  setTimeout(function() {
    fishes.classList.add("fade-in");
  }, 500);

  setTimeout(function() {
    accessory.classList.add("fade-in");
  }, 1000);
});

function moveRight() {
  var signup = document.getElementById('signup');
  var login = document.getElementById('login');

  signup.style.left = '160px';
  login.style.left = '1339px'; 
}
  
function moveLeft() {
  var signup = document.getElementById('signup');
  var login = document.getElementById('login');

  signup.style.left = '-1560px';
  login.style.left = '0px';
}
