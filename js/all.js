var element = document.querySelector('.btn');

element.onclick = function (event) {

    console.log(event);

}

var element2 = document.querySelector('.btn2');

element2.addEventListener('click', function (event) {
    alert(event);
}, false);