var todoList = [];

var inputButton = document.querySelector('.inputButton');
var inputText = document.querySelector('.inputText');

function putAndShow() {
    var inputTextValue = inputText.value;

    if (inputTextValue == '') {
        return;
    }

    todoList.push(inputTextValue);

    window.localStorage.setItem('todoList', JSON.stringify(todoList));
}

inputButton.addEventListener('click', putAndShow);



// var list  = document.querySelector('.list');
//
//
// function updateList(event) {
//
//
//
// }
//
// item.addEventListener('click', updateList, false);