var todoList = [];

var inputButton = document.querySelector('.inputButton');
var inputText = document.querySelector('.inputText');

function updateLocalStorage() {
    window.localStorage.setItem('todoList', JSON.stringify(todoList));
}

function updateLocalStorageAndList() {
    updateLocalStorage();
    updateList();
}

function putAndShow() {
    var inputTextValue = inputText.value;
    if (inputTextValue == '') {
        return;
    }
    todoList.push(inputTextValue);

    updateLocalStorage();
    updateList();
}

inputButton.addEventListener('click', putAndShow);

var list = document.querySelector('.list');

function updateList(event) {

    var todoListString = window.localStorage.getItem('todoList');
    if (todoListString == null || todoListString == '') {
        todoListString = '[]';
    }
    todoList = JSON.parse(todoListString);

    var length = todoList.length;
    var string = '';
    for (var i = 0; i < length; i++) {
        string += "<li>" + todoList[i] + "<button data-num=" + i + ">刪除</button></li>";
    }

    list.innerHTML = string;

}

updateList();

function removeItemFromList(e) {

    if (e.target.nodeName != 'BUTTON') {
        return
    }

    todoList.splice(e.target.dataset.num, 1);

    updateLocalStorageAndList();
}

list.addEventListener('click', removeItemFromList);