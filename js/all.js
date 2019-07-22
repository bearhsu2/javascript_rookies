var body = document.body;


function goRocket(event) {

    switch (event.keyCode) {
        case 49:
            document.querySelector(".rocket-1").style.bottom = '2000px';
            break;
        case 50:
            document.querySelector(".rocket-2").style.bottom = '2000px';
            break;
        case 51:
            document.querySelector(".rocket-3").style.bottom = '2000px';
            break;
    }

}


body.addEventListener('keydown', goRocket, false);

var inputEl = document.querySelector("#inputId");
function alertMe() {
    alert('MOUSE_MOVE');
}
inputEl.addEventListener('mousemove', alertMe, false);
