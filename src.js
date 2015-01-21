/**
 * Created by xinpan on 01/21/2015.
 */


//function helloworld() {
//    alert("hello world!");
//}
//
//helloworld();


//
//var arr = [];
//
//arr.push("AAA");
//arr.push("BBB");
//arr.push("CCC");


//var arr = new Array(3);
//arr.push("XXX");
//arr.push("YYY");
//arr.push("ZZZ");
//arr.push("WWWW");
//arr.push("TTTT");
//arr[0] = "AAAA";
//arr[1] = "BBBB";
//arr[2] = "CCCC";
//arr[3] = "ZZZZ";

//var str = arr.length;
//
//for(var index = 0; index < arr.length; index++) {
//    str = str + "/" + arr[index];
//}

//alert(str);


var golf = {
    make: "Volkswagen",
    model: "GTI",
    year: "2012",
    color: "White",
    VIN: "123456789ABC",
    engineOn: false,


    showGolf: function () {
        alert(this.make + "/" + this.model + "/" + this.year);
    },

    start: function () {
        this.engineOn = true;
        alert("Engine On.")
    },

    stop: function () {
        this.engineOn = false;
        alert("Engine Off");
    },

    go: function () {
        if (this.engineOn) {
            alert("Let's go.")
        } else {
            alert("Start the engine first.");
        }
    }

}

//alert(golf.color);


golf.start();
golf.go();
golf.stop();



//golf.doorNum = 2;
//golf.year = true;
//console.log(golf);

function changeColor(golf) {
    golf.color = "Black";
}

//changeColor(golf);

//console.log(golf);

//golf.showGolf();








