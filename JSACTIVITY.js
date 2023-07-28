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
//TONNE
function convertonne(unitConverter) {
    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * unitConverter;
    document.getElementsByName('output')[0].value = result;
}

function ounce() {
    convertonne(35270);
}

function pound() {
    convertonne(2205);
}

function gram() {
    convertonne(1e+6);
}