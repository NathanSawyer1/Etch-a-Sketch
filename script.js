const cnt = document.getElementById('container');

for (let i = 0; i < 256; i++) {
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
