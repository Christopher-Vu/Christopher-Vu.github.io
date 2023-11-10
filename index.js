document.addEventListener('scroll', function() {
    // get scroll position
    var scrollPosition = window.scrollY;

    // Check if user has scrolled > 70vh, and activate navbar line if so
    if (scrollPosition > 0.7 * window.innerHeight) { 
        const navBorder = document.getElementById("nav-border");
        var navbar = document.getElementById('navbar');

        navBorder.style.width = '100%';
        navbar.style.setProperty('--width', '250%'); // update width property
    } 
    
    if (scrollPosition < 0.6 * window.innerHeight) { 
        const navBorder = document.getElementById("nav-border");
        var navbar = document.getElementById('navbar');

        navBorder.style.width = '0';
        navbar.style.setProperty('--width', '0%'); // update width property
    }
  });