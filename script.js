const cnt = document.getElementById('container');


document.getElementById('choice').addEventListener('click', (e) => {
    
    let choice;

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
newDiv.style.backgroundColor = 'black';

newDiv.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = "gray";
});

newDiv.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = "black";
})

cnt.appendChild(newDiv);
}


})
