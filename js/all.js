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

    updateList();
}

inputButton.addEventListener('click', putAndShow);


var list = document.querySelector('.list');


function updateList(event) {

    var todoListString = window.localStorage.getItem('todoList');
    if (todoListString === null || todoListString == '') {
        todoListString = '[]';
    }
    todoList = JSON.parse(todoListString);

    var length = todoList.length;
    var string = '';
    for (var i = 0; i < length; i++) {

        string += "<li data-num='" + i + "'>" + todoList[i] + "</li>";

    }

    list.innerHTML = string;

}

updateList();