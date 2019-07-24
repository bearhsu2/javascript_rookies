var writeButton = document.querySelector('.writeNameButton');
var readButton = document.querySelector('.readNameButton');

function writeName() {
    var name = document.querySelector('.inputName').value;
    localStorage.setItem('name', name);

}

function readName() {
    var name = localStorage.getItem('name');
    alert(name);
}

writeButton.addEventListener('click', writeName);

readButton.addEventListener('click', readName);