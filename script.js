const cnt = document.getElementById('container');

for (let i = 0; i < 256; i++) {
const newDiv = document.createElement('div');
newDiv.classList.add("item");
newDiv.style.backgroundColor = 'black';
cnt.appendChild(newDiv);
}