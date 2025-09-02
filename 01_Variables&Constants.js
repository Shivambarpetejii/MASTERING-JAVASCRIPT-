//Variables & Constants 👍

// Variable: A container to store data that can be changed later.
// Constant: A container to store data that cannot be reassigned after its initial value.

//Example :- variable 
    var name = "shivam";
    let age = 67;
    console.log("this is var variable :=",name);
    console.log("this is let variable :=",age);
    
    //this is variable it can change the value.

//Example :- Constants

    const color = "red"
    console.log("this is color", color)
    //this is constant can not change value ;



// | Feature                     | var                             | let                            | const                           |
// | --------------------------- | ------------------------------- | ------------------------------ | ------------------------------- |
// | Scope                       | Function scoped                 | Block scoped                   | Block scoped                    |
// | Hoisting                    | Yes, initialized as `undefined` | Yes, but in Temporal Dead Zone | Yes, but in Temporal Dead Zone  |
// | Reassignment                | Yes                             | Yes                            | No                              |
// | Redeclaration in same scope | Yes                             | No                             | No                              |
// | Use case                    | Older code, global variables    | Modern JS, variables           | Constants, immutable references |



//1. Function Scope (var)

    //first you decliared the variable form var you follow fucational scope you can change the value  inside the scope but it will change globaly

        function testFunctionScope(){
            var var_variable = 40;

            if(true)
            {
                var var_variable = 80;
                console.log("this is var_variable inside the block scope",var_variable);//expected output is 80
                
            }

                console.log("this is var_variable inside the funcational scope",var_variable);//expected output is 80


        }
        testFunctionScope();

//2.  Block Scope (let & const)
      
        // if you declaried from let

       function testBlockScope(){
            let let_variable = 40;
            if(true)
            {
                let let_variable = 80;
                console.log("this is let_variable inside the block scope",let_variable);//expected output is 80
                
            }

                console.log("this is let_variable inside the block scope",let_variable);//expected output is 40

       }
       testBlockScope();


// Hoisting:- 

       console.log(a);//undifiend
       var a;

    //    console.log(b);// can not access because you use let that is not sport hosting
    //    let b;

    //    console.log(c);//can not access because you use const it is also not sport hosting
    //    const c=null;//not fill empty 




  // var is hoisted and initialized with undefined.

  // let/const are hoisted but cannot be accessed before declaration (Temporal Dead Zone).

 // Question -1 Difference between var, let, and const?

    // Answer :- Scope, hoisting, redeclaration, reassignment differences.

// Question -2 What is the Temporal Dead Zone (TDZ)?

// Answer :- Period between block start and variable initialization for let & const.

// Q;3 Can const objects/arrays be mutated?

// Yes, the reference cannot change, but internal properties/elements can.

// Q4 What will this output?

        // console.log(x);
        // var x = 10;

        // console.log(y);
        // let y = 20;

        // console.log(z);
        // const z = 30;

// Q5 Var in loops and closures problem?

       for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}// first car that have functional scope it meanes setTimeout have always print 3 ,3 ,3 because after one secont we i reach 3
// /Why? var is function scoped; all timeouts share the same i.