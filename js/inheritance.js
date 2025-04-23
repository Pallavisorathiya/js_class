//================================================single======================================================
// class Parent{
//     a = 151;
//     Sayparent(){
//         console.log("parent class called");
//     }
// }

// class child extends Parent{
//     Saychild() {
//         this.Sayparent();
//         console.log("child class called", this.a);
//     }
// }

class Parent{
    constructor(){
        console.log("parent cons")
    }
    a = 151;
    Sayparent(){
        console.log("parent class called");
    }
}
class child extends Parent{
    constructor(){
        super();
        console.log("child const...")
    }
    Saychild() {
        this.Sayparent();
        console.log("child class called", this.a);
    }
}


// let obj = new child();
// obj.Sayparent();
// obj.Saychild();

//==========================================MULTILEVEL====================================================
class a{
    sayA(){
        console.log(" class A called")
    }
}
class b  extends a{
    sayB(){
        console.log(" class B called")
    }
}
class c  extends b{
    sayC(){
        console.log(" class C called")
    }
}
// let obj = new c ()
// obj.sayA()
// obj.sayB();
// obj.sayC();

//===================================HIERACHICAL=========================================================
class  abc {
    sayABC() {
        console.log("class ABC called")
    }
}
class  pqr extends abc {
    sayPQR() {
        console.log("class PQR called")
    }
}
class  xyz extends abc {
    sayXYZ() {
        console.log("class XYZ called")
    }
}
let objPQR = new pqr();
objPQR.sayABC();
objPQR.sayPQR();
let objXYZ = new xyz();
objXYZ.sayABC();
objXYZ.sayXYZ();





