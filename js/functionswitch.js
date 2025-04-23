// TNRN 

function add1(){
    let a=15,b=25;
    console.log("Sum of A and B is ",a+b);
}


// TNRS 
function add2(){
    let a=15,b=35;
    let x;
    x = a + b;
    return x;

}

// TSRN 
function add3(a,b){
    let total;

    total = a+b;
    console.log(total);
}


// TSRS 

function add4(a,b){
let total=a+b;
return total;
}

choice = prompt("Enter your Choice:");

switch(choice){
    case "1":
        add1();
        break;
    case "2":
        console.log(add2());
        break;
    case "3":
        add3(10,20);
        break;
    case "4":
        console.log(add4(15,20));
        break;
    default:
        console.log("Invalid choice");

}