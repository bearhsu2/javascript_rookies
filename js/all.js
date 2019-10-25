const listLen = document.querySelectorAll('.list li').length;

for (let i = 0; i < listLen; i++) {

    document.querySelectorAll('.list li')[i].addEventListener(
        'click', function () {
            alert(i + 1);
        }
    );
}