var item = document.querySelector('.list li');


function checkData(e) {

    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;

    alert(num);
    alert(dog);

}

item.addEventListener('click', checkData, false);