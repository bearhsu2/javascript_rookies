var elBtn = document.querySelector('.btn');

elBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    alert('btn');
}, false);

var elBody = document.querySelector('.body');

elBody.addEventListener('click', function () {
    alert('body');
}, false);