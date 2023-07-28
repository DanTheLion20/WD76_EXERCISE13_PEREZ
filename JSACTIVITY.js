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