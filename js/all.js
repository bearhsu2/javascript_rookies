var farms = [
    {
        farmer: "Bob",
        yeye: 45
    }, {
        farmer: "Martin",
        nono: 22
    }
];

var len = farms.length;

var el = document.querySelector(".list");
for(var i = 0; i < len; i++){
    var str = document.createElement('li');
    str.textContent = farms[i].farmer;
    el.appendChild(str);
}
