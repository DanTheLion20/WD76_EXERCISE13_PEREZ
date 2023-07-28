function ounce() {

    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * 35.274;
    document.getElementsByName('output')[0].value = result;
}

function pound() {

    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * 2.205;
    document.getElementsByName('output')[0].value = result;
}

function gram() {

    var data = document.getElementsByName('massConverter')[0].value;
    var result = parseFloat(data) * 1000;
    document.getElementsByName('output')[0].value = result;
}