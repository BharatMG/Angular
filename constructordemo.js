var Person = /** @class */ (function () {
    function Person(personId, pName, gender) {
        this.personId = personId;
        this.pName = pName;
        this.gender = gender;
    }
    return Person;
}());
var p = new Person(1, "bharat", "Male");
console.log(p.personId);
console.log(p.pName);
console.log(p.gender);
