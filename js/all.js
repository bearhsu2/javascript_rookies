document.getElementById('countId').onclick = function () {

    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value);
    var cokeNum = parseInt(document.getElementById('cokeNumId').value);

    document.getElementById('totalId').textContent = hamNum * hamPrice + cokeNum * cokePrice;


}