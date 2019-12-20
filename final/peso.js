function Calculate() {
    var top = parseInt(document.getElementById('top').value);
    var mid = parseInt(document.getElementById('mid').value);
    var butt = parseInt(document.getElementById('butt').value);

    var res = top + mid + butt;

    alert(res);

    document.getElementById('res').value = res;

    if (res > 93) {
        document.getElementById('res').style = "red";

        alert("Compa 'Te pasaste'!!!!");
    } else {

        alert("Todo bien PRRO!! hechale mas carga");

    }

}