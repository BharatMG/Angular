function add(x, y) {
    return x + y;
}
var result = add(10, 20);
console.log("adding two numbers :" + result);
var res = function (a, b) {
    return a * b;
};
var mult = res(11, 22);
console.log("multiple two numbers : " + mult);
// optional parameter
function createnames(msg, name) {
    return msg + " " + name;
}
console.log(createnames("hello", "bharat"));
console.log(createnames("hello"));
//default parameter
function movienames(movie, theater) {
    if (theater === void 0) { theater = "shankar"; }
    return movie + theater;
}
console.log(movienames("jackie", "magavi"));
console.log(movienames("paramatma"));
function greet(msg) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    console.log(msg + " " + songs.join(","));
}
greet('he', "ba", "ka", "ra", "janagana");
