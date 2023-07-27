function ounce() {

    var base = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(base) * 35.274;
    document.getElementsByName('output')[0].value = result;
}

function pound() {

    var base = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(base) * 2.205;
    document.getElementsByName('output')[0].value = result;
}

function gram() {

    var base = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(base) * 1000;
    document.getElementsByName('output')[0].value = result;
}