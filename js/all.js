var element = document.querySelector('.btn');

element.onclick = function (event) {
    console.log('haha');
}

element.addEventListener('click', function(){
   alert('click1');
});

element.addEventListener('click', function(){
   alert('click2');
});