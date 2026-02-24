const cnt = document.getElementById('container');

function randomColor() {

const red = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);

return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

let choice;

function selectSize() {

     while (true) {
        
        choice = prompt('Select Grid Size:', 'max: 100');
            if (Number(choice) >= 100) {
                alert("Number too high! Try again!");
            }   else if (Number(choice) < 100) {
        break;
        }
    
    }
    cnt.innerHTML = "";

for (let i = 0; i < choice*choice; i++) {
const newDiv = document.createElement('div');
newDiv.classList.add('element')
newDiv.classList.add(`item${i}`);
newDiv.dataset.opacity = 0;

newDiv.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = randomColor();
    let currentOpacity = Number(e.target.dataset.opacity);
    currentOpacity += 0.1;
    e.target.style.opacity = currentOpacity;
    newDiv.dataset.opacity = currentOpacity; 
});

cnt.appendChild(newDiv);
}
}

selectSize();

document.getElementById('choice').addEventListener('click', (e) => {
    selectSize();
})
