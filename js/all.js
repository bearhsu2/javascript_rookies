var originlArray = [
    {name: 'Kuma', age: 37},
    {name: 'HaHa', age: 12}
]

var string = JSON.stringify(originlArray);

localStorage.setItem('data', string);

var newString = localStorage.getItem('data');

var newArray = JSON.parse(newString);

alert(newArray[0].name);