/**
 * Created by xinpan on 01/21/2015.
 */


//function helloworld() {
//    alert("hello world!");
//}
//
//helloworld();



var arr = [];

arr.push("AAA");
arr.push("BBB");
arr.push("CCC");

var str = "";

for(var index = 0; index < arr.length; index++) {
    str = str + "/" + arr[index];
}

alert(str);
