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

function gridLighting() {
  const mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
  const RGBVals = hexToRgb(mainBgColor)

  const rows = Array.from(highlightWrapper.children);
  for (let i = 0; i < rows.length; i++) {
    var boxes = Array.from(rows[i].children);
    for (let j = 0; j < boxes.length; j++) {
      var box = boxes[j];

      if (!box.classList.contains('highlight')) {
        const brightness = Math.floor(Math.random() * 50) + 1;
        var Bg = [...RGBVals];;
        
        for (let i=0; i<3; i++) {
          Bg[i] = Bg[i] + brightness;
          if (Bg[i] >= 256) {
            Bg[i] = 256;
          }
        }

        box.style.backgroundColor = `rgb(${Bg[0]}, ${Bg[1]}, ${Bg[2]})`;
      }
    }
  }
}

function hexToRgb(hex, result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
  return result ? result.map(i => parseInt(i, 16)).slice(1) : null
}

async function runGridLighting() {
  while (true) { 
    gridLighting();
    await sleep(1000);
  }
}

runGridLighting();

document.body.addEventListener('click', function (event) {
  if (event.target.closest('#highlight-wrapper')) {
    if (event.target.classList.contains('highlight') && !(event.target.classList.contains('expanded'))) {
      manageHighlights(event, true);
    } else if (event.target.classList.contains('highlight') && event.target.classList.contains('expanded')) {
      manageHighlights(event, false);
    }
    
    return;
  }
    
  swapColors();
});

function manageHighlights(event, expand) {
  if (expand) {
    var sign = '+'; var mult = 2; var mult2 = 1;
    event.target.classList.add('expanded');
  } else {
    var sign = '-'; var mult = 1; var mult2 = 0;
    event.target.classList.remove('expanded');
  }

  const parent = event.target.parentElement;
  const highlightSiblings = Array.from(parent.children);

  highlightWrapper.style.height = `calc(${highlightWrapper.offsetHeight}px ${sign} 24vw)`;
  parent.style.width = `${130 * mult}vw`;
  parent.style.height = `${24 * mult}vw`;

  for (let i=0; i < highlightSiblings.length; i++) {
    const sibling = highlightSiblings[i];
    sibling.style.height = `${24 * mult}vw`;
    sibling.style.width = `${26 * mult}vw`;
  }

  if (event.target.classList.contains('c')) {
    parent.style.transform = `translateX(-${52 * mult2}vw)`;
  } if (event.target.classList.contains('r')) {
    parent.style.transform = `translateX(-${104 * mult2}vw)`;
  }
}