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

//=====

var mouseImg = document.querySelector('.mouseImg');

function getPosition(e) {

    mouseImg.style.left = e.clientX + 'px';
    mouseImg.style.top = e.clientY + 'px';
}

body.addEventListener('mousemove', getPosition, false);
