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

var bgColors = ['#E0CCBE', '#010101', '#EEEDEB', '#17223B', '#CFD3CE'];
var textColors = ['#3C3633', '#F0EDCF','#DA2D2D', '#FC6736', '#34626C'];
var emphasisColors = ['#2F2A28', '#FFFFFF', '#2A0E0E', '#FF8969', '#486A73'];
var secondaryBgColors = ['#C8BAA9', '#1A1A1A', '#D5D4D3', '#1B2435', '#A6A9A8'];
var bgUrls = ["landing-img1.png", "landing-img2.png", "landing-img3.png", "landing-img4.png", "landing-img5.png"];
var bgPos = ["top", "top", "center", "top", "center"];
let colInd = 0;

function swapColors() {
    colInd = colInd + 1;
    if (colInd == 5) {
        colInd = 0;
    }

    document.documentElement.style.setProperty('--main-bg-color', bgColors[colInd]);
    document.documentElement.style.setProperty('--main-text-color', textColors[colInd]);
    document.documentElement.style.setProperty('--emphasis-text', emphasisColors[colInd]);
    document.documentElement.style.setProperty('--secondary-bg-color', secondaryBgColors[colInd]);
    let landingImg = document.getElementById("landing-img");
    landingImg.style.setProperty('background-image', 'url("/static/' + bgUrls[colInd] + '")'); 
    landingImg.style.setProperty('background-position', bgPos[colInd]);
}

swapColors();