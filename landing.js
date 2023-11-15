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



// grid looking thingy
let columns = Math.floor(document.body.clientWidth / 50), 
    rows = Math.floor(document.body.clientHeight/ 50); 

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.ass("tile")
    return tile
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

createTiles(columns * rows)