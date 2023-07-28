//KILOGRAM
function convertkg(unitConverter) {
    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * unitConverter;
    document.getElementsByName('output')[0].value = result;
}

function ounce() {
    convertkg(35.274);
}

function pound() {
    convertkg(2.205);
}

function gram() {
    convertkg(1000);
}
//STONE
function convertstone(unitConverter) {
    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * unitConverter;
    document.getElementsByName('output')[0].value = result;
}

function ounce() {
    convertstone(224);
}

function pound() {
    convertstone(14);
}

function gram() {
    convertstone(6350);
}
//MILLIGRAM
function convertmilligram(unitConverter) {
    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * unitConverter;
    document.getElementsByName('output')[0].value = result;
}

function ounce() {
    convertmilligram(28350);
}

function pound() {
    convertmilligram(453600);
}

function gram() {
    convertmilligram(1000);
}