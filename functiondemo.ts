function add(x:number,y:number):number{
return x+y;
}
let result=add(10,20);
console.log("adding two numbers :" + result);


       let res =function(a:number,b:number):number{
            return a*b;
        }
       let mult =res(11,22);
        console.log("multiple two numbers : "+mult);


       // optional parameter

       function createnames(msg:string,name?:string):string{
        return msg+" "+name;
       }
       console.log(createnames("hello","bharat"));
       console.log(createnames("hello"));

       //default parameter
      function movienames(movie:string, theater:string="shankar"):string{
        return movie+ theater;
       }
       console.log(movienames("jackie","magavi"));
       console.log(movienames("paramatma"));


       function greet(msg:string,...songs:string[]){
        console.log(msg+" "+songs.join(","));
       }
       greet('he',"ba","ka","ra","janagana");