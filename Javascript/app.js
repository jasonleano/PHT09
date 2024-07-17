console.log("hello");

//Single Line
/*
Multi
Line
*/

function sayname () {
    let name = "Diether";
    console.log(name);

    let x = 10;
    let y = 20;
    let sum = x + y;
    let diff = x-y;
    let prod = x*y;
    let quot = x/y;
    let modu = x%y;
    console.log(sum);
    console.log(diff);
    console.log(prod);
    console.log(quot);
    console.log(modu);
    console.log(typeof(sum));

}

function stringFunction(){
    console.log("Hello " + "again" + 2);
}

function logicalOperator() {
    let x = true;
    let y = false;

    console.log("This is AND "+ x && y);
    console.log("This is OR "+ x || y);
    console.log("This is Negation "+ x);
}

function assignmentOperator(){
    let x = 10;
    let y = 5;

    console.log("A: "+ (x+=y));
    console.log("A: "+ (x-=y));
    console.log("A: "+ (x*=y));
    console.log("A: "+ (x/=y));
}

function functionCall(X, Y){
    console.log(X + Y);
}

function conditionalOperators(X){
    if (X === null){
        let x = 1;
    }
    
    if (X>=17){
        console.log("Inside If");
    } else {
        console.log("Inside Else");
    }
}

function caseOperator(X) {
    switch (X){
        case "Monday":
            console.log("1st day of week");
            break;
        case "Tuesday":
            console.log("2nd day of week");
            break;    
        case "Wednesday":
            console.log("3rd day of week");
            break;
        case "Thursday":
            console.log("4th day of week");
            break;
        case "Friday":
            console.log("5th day of week");
            break;
        default:
            console.log("Value of X "+X);
    }
}

function loopOperators(){
    /*
    for (let x = 0; x < 4; x++){
        console.log("Printing X: "+x);
    }
    */
   let x = 0;
   while (x<4){
        console.log("Printing X in While: "+x);
        x++;
   }
   let y = 0;
   do {
    console.log("Printing X in do while: "+y);
    y++;
   }while(y<4);
    
}

function arraysExamples(){
    let numbers = [42, 12, 16, 19, 7, 98];
    //Access elements
    console.log("Number of items inside: "+ numbers.length);
    console.log("First element: "+numbers[0]);
    console.log("Third Number: "+numbers[2]);
    console.log("Last number: "+numbers[numbers.length - 1]);

    //Modify elements
    numbers[2] = 11;
    console.log(numbers[2]);
    numbers.push(69);
    console.log(numbers);
    numbers.pop();
    console.log(numbers);
    //numbers.splice(0, numbers.length);
    //console.log(numbers);

    //Loops with arrays
    for (let i = 0; i <numbers.length;i++){
        console.log("Printing numbers inside: "+numbers[i]);
    }

    numbers.forEach(function(numbers){
        console.log("Numbers inside for each function: "+numbers);
    });

    numbers.forEach(numbers=>{
        console.log("Numbers inside for each =>: "+numbers);
    });

    let element = ["dark", "light", "earth", "air", "fire", "water"];

    //length
    console.log("length is: "+element.length);

    //indexOf
    console.log("indexOf: "+element.indexOf("dark"));
    console.log("indexOf: "+element.indexOf("Quarry")); //If does not exist, returns -1

    //includes
    console.log("includes: "+element.includes("light"));
    console.log("includes: "+element.includes("Mandarin")); //If does not exist, return false

    //join
    console.log("Joined elements: "+element.join("-"));

    //slice
    let towers = ["tall", "short", "mid"];
    let slicedtowers = towers.slice(1,2); //number on starting parameter isnt affected by slice.
    console.log("Sliced Towers: "+slicedtowers);

    //splice
    let splicedtowers = towers.splice(1,2);
    console.log("Spliced Towers: "+splicedtowers); //2nd parameter amount of elements to be deleted.
    console.log("Is original file affected?: "+towers);
}

sayname();
stringFunction();
logicalOperator();
assignmentOperator();
functionCall(1, 3);
conditionalOperators(18);
caseOperator("Monday");
loopOperators();
arraysExamples();

//Object literals
    
const matter = { //object creation
    gas: 27, //object detailing
    liquid: "Missing",
    solid: 1,
    plasma: "No",

    greet: function() {//method of the object
        console.log(`The property you called is ${this.liquid}`);
    }
}

const energy = {
    joule: 400,
    unit: "KM",
}
matter.energy = energy;
console.log(`This is Joule `+matter.energy.joule);
matter.greet();