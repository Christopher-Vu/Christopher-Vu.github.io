document.addEventListener('scroll', function() {
    // get scroll position
    var scrollPosition = window.scrollY;
    const navBorder = document.getElementById("nav-border");
    const navbar = document.getElementById('navbar');

    // Check if user has scrolled > 70vh, and activate navbar line if so
    if (scrollPosition > 0.7 * window.innerHeight) { 
        navBorder.style.width = '100%';
        navbar.style.setProperty('--width', '250%'); // update width property
    } 
    
    if (scrollPosition < 0.6 * window.innerHeight) { 
        navBorder.style.width = '0';
        navbar.style.setProperty('--width', '0%'); // update width property
    }
  });