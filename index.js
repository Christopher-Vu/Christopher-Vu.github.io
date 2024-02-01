document.addEventListener('scroll', function() {
    // get scroll position
    var scrollPosition = window.scrollY;
    const navBorder = document.getElementById("nav-border");
    const navbar = document.getElementById('navbar');

    // Check if user has scrolled > 70vh, and activate navbar line if so
    if (scrollPosition > 0.3 * window.innerHeight) { 
        navBorder.style.width = '100%';
    } 
    
    if (scrollPosition < 0.3 * window.innerHeight) { 
        navBorder.style.width = '0';
    }
  });

var bgColors = ['#EEEDEB', '#FFFDE8', '#000000', '#17223B', '#CFD3CE'];
var textColors = ['#3C3633', '#DA2D2D', '#F0EDCF', '#FF6768', '#34626C']
let colInd = 0;

function swapColors() {
    const stylesheet = document.getElementById('stylesheet').sheet;
    colInd = colInd + 1;
    if (colInd == 5) {
        colInd = 0;
    }

    stylesheet.cssRules[1].style.setProperty('--main-bg-color', bgColors[colInd]);
    stylesheet.cssRules[1].style.setProperty('--main-text-color', textColors[colInd]);
}