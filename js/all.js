var area = document.querySelector("#areaId");
var list = document.querySelector(".list");

var country = [
    {
        farmer: "Allen",
        area: "Area1"
    }, {
        farmer: "Bob",
        area: "Area2"
    }, {
        farmer: "Charlie",
        area: "Area2"
    }
];

function updateList(e) {
    var len = country.length;

    var str = '';
    for(var i = 0; i < len; i++){
        var element = country[i];

        if (element.area == e.target.value){
            str += '<li>' + element.farmer + '</li>';
        }
    }

    list.innerHTML = str;
}

area.addEventListener('change', updateList, false);