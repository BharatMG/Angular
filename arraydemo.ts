let fruits:string[];
fruits=['mango','banana','apple','chiku'];
console.log(fruits);

let Animals:Array<string>;
Animals=["lion",'cat','snake'];
console.log(Animals);

let person:Array<string | number>;
person=["naveen",'kohli','rcb',263, 49];
console.log(person);

let genericarray:Array<any>;
genericarray=["lion",'cat','snake',true,222,10.78];
console.log(genericarray);
console.log("second value is  :"+genericarray[2]);