document.getElementById('countId').onclick = function () {

    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value);
    var cokeNum = parseInt(document.getElementById('cokeNumId').value);


    document.getElementById('totalId').textContent = hamNum * hamPrice + cokeNum * cokePrice;


}

var cornField = [8, 5, 6];
console.log(cornField);


var farm = {
    farmer: 'casper',
    dogs: ['james', 'bond'],
    cornField: [8, 5, 6],
    goDinner: function(){
        console.log(farm.farmer + ', go home for dinner!!!');
    }
};

farm.goDinner();
