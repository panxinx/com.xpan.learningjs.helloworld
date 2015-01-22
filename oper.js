/**
 * Created by xinpan on 01/21/2015.
 */


function getValue() {
    var value = document.getElementById("code_1");
    alert(value.innerHTML);
}

function changeValue() {
    var value = document.getElementById("code_1");
    value.innerHTML = "Hello JavaScript.";
}