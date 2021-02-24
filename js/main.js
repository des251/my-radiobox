// Navbar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Sticky navbar
function makeNavSticky() {
  var flag = true;
  var el = document.getElementById('main-nav');
  window.addEventListener('scroll', function() {
    if (this.pageYOffset > 0) {
      if (flag) {
        el.classList.remove('transparent');
        el.classList.add('cyan', 'accent-4');
        flag = false;
      }
    };
    if (this.pageYOffset < 100) {
      if (!flag) {
        el.classList.remove('cyan', 'accent-4')
        el.classList.add('transparent');
        flag = true;
      }
    };
  });
};

//Slider
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);
});

//Paralax
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});

makeNavSticky();