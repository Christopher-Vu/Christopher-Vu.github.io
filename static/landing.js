// boilerplate sleep constant
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// greeting
async function greeting() {
    window.scrollTo(0,0); // bring user to top of page
    
    const greeting = document.getElementById("greeting");
    const greetingText = document.getElementById("greeting-text");

    const delays = [350, 250, 150, 120, 120, 120, 120, 120, 120, 120, 120];
    const words = ["Xin chào", "привет", "你好", "नमस्ते", "こんにちは", "Hola", "Guten Tag", "سلام", "Ciao", "Salve", "안녕하세요",];
    
    await sleep(600);
    for (let i = 0; i < delays.length; i++) {
        await sleep(delays[i]);
        greetingText.textContent = words[i];
    }
    await sleep(500);

    window.scrollTo(0,0); // bring user to top of page

    // pull greeting from view
    greeting.style.transform = "translateY(-105vh)";
    greeting.style.borderBottomLeftRadius = "100vw";
    greeting.style.borderBottomRightRadius = "100vw";
}

greeting();

const text = document.getElementById("scroll-text");

text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 13.1}deg)">${char}</span>`
	)
	.join("");


var highlightWrapper = document.getElementById('highlight-wrapper')

document.body.addEventListener('click', function (event) {
  if (event.target.closest('#highlight-wrapper')) {
    if (event.target.classList.contains('highlight') && !event.target.classList.contains('expanded')) {
      manageHighlights(event, True)
    }
    
    return;
  }
    
  swapColors();
});

function manageHighlights(event, expand) {
  if (expand) {
    sign = '+'; mult = 2; mult2 = 1;
  } else {
    sign = '-'; mult = 1; mult2 = -1;
  }

  const parent = event.target.parentElement;
  const highlightSiblings = Array.from(parent.children);

  highlightWrapper.style.height = `calc(${highlightWrapper.offsetHeight}px ${sign}} 24vw)`;
  parent.style.width = `calc(130vw * ${mult})`;
  parent.style.height = `calc(24vw * ${mult})`;

  for (let i=0; i < highlightSiblings.length; i++) {
    const sibling = highlightSiblings[i];
    sibling.style.height = `calc(24vw * ${mult})`;
    sibling.style.width = `calc(26vw * ${mult})`;
  }

  if (event.target.classList.contains('c')) {
    parent.style.transform = `translateX(calc(-52vw * ${mult2}))`;
  } if (event.target.classList.contains('r')) {
    parent.style.transform = `translateX(calc(-104vw * ${mult2}))`;
  }
}