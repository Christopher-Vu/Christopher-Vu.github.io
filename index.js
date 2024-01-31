document.addEventListener('scroll', function() {
    // get scroll position
    var scrollPosition = window.scrollY;
    const navBorder = document.getElementById("nav-border");
    const navbar = document.getElementById('navbar');

    // Check if user has scrolled > 70vh, and activate navbar line if so
    if (scrollPosition > 0.2 * window.innerHeight) { 
        navBorder.style.width = '100%';
    } 
    
    if (scrollPosition < 0.2 * window.innerHeight) { 
        navBorder.style.width = '0';
    }
  });