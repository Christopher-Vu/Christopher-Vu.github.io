// boilerplate sleep constant
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// greeting
async function greeting() {
    window.scrollTo({top: 0}); // bring user to 100vh

    const greeting = document.getElementById("greeting");
    const greetingText = document.getElementById("greeting-text");
    const cover = document.getElementById("cover");

    const delays = [350, 250, 150, 120, 120, 120, 120, 120, 120, 120, 120];
    const words = ["Xin chào", "привет", "你好", "नमस्ते", "こんにちは", "Hola", "Guten Tag", "سلام", "Ciao", "Salve", "안녕하세요",];
    
    await sleep(600);
    for (let i = 0; i < delays.length; i++) {
        await sleep(delays[i]);
        greetingText.textContent = words[i];
    }
    await sleep(500);

    window.scrollTo({top: 0}); // bring user to top of page

    // pull greeting from view
    greeting.style.transform = "translateY(-100vh)";
    greeting.style.borderBottomLeftRadius = "100vw";
    greeting.style.borderBottomRightRadius = "100vw";
}

greeting();


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