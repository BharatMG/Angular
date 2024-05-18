class Person{

    personId:number;
    pName:string;
    gender:string;

    constructor(personId:number,pName:string,gender:string){
        this.personId=personId;
        this.pName=pName;
        this.gender=gender;
    }
}

let p=new Person(1,"bharat","Male");
console.log(p.personId);
console.log(p.pName);
console.log(p.gender);