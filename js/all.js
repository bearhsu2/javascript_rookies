var element = document.querySelector('.header');

element.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.target.nodeName);
    console.log(e.target.nodeType);
});