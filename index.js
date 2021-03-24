const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
const newContent = document.createTextNode("is the champion");
newHeader.appendChild(newContent);
document.body.appendChild(newHeader);




