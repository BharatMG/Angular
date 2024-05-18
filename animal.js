var petname = "dog";
function setName() {
    var petname = "cow";
    console.log("petname in method :" + petname);
}
setName();
console.log("petname outside :" + petname);
var index = 0;
for (index = 0; index < 5; index++) {
    console.log("index value in for loop :" + index);
}
console.log("index value outside for loop :" + index);
