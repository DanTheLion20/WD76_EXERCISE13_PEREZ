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

function ounce1() {
    convertstone(224);
}

function pound1() {
    convertstone(14);
}

function gram1() {
    convertstone(6350);
}
//TONNE
function convertonne(unitConverter) {
    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * unitConverter;
    document.getElementsByName('output')[0].value = result;
}

function ounce2() {
    convertonne(35270);
}

function pound2() {
    convertonne(2205);
}

function gram2() {
    convertonne(1e+6);
}