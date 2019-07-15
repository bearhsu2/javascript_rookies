var el = document.querySelector('.list');


var farms = [
    {
        farmer: "Charlie",
        dogs: ['Bow', 'Wow']
    },
    {
        farmer: "Bob",
        dogs: ['Andy']
    }
];

var str = '';

for(var i = 0; i < farms.length; i++){

    var content = '<li>'+ farms[i].farmer +'</li>';
    str += content;
}

el.innerHTML = str;
