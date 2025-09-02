// Categories of Data Types :- 
    //👉 JavaScript has two categories of data types:

        // Primitives (immutable, stored directly in memory stack)

        //  number, string, boolean, undefined, null, symbol, bigint

        // Objects (non-primitive, stored by reference in heap memory)

        //   Object, Array, Function, Date, RegExp, Map, Set, etc.

// Primitives:- 
            // ✅ 1. number

            //         Represents integers & floating points.

            //         JS uses 64-bit floating point (double precision).

            //         Special values: Infinity, -Infinity, NaN

            let x = 42;         // integer
            let y = 3.14;       // float
            let z = 1 / 0;      // Infinity
            let notNum = "a" * 3; // NaN

            //🔎 Corner case:
                console.log(NaN === NaN); // false
                console.log(Object.is(NaN, NaN)); // true

    // ✅ 2. string
            // Sequence of characters inside " ", ' ', or ` (template literals).
            // Immutable: cannot change characters directly.

            let str = "hello";
            str[0] = "H"; // ❌ does not work// dont show any error
            console.log(str); // "hello"

    //✅ 3. boolean

            // Either true or false.

            // Used in conditions, logical operations.

                console.log(Boolean(0));      // false
                console.log(Boolean(""));     // false
                console.log(Boolean(" "));    // true

    //✅ 4. undefined

            // Default value for uninitialized variables.

            let a;
            console.log(a); // undefined

    //✅ 5. null

            // Represents intentional absence of value.

            let b = null;
            console.log(typeof b); // "object" (historic JS bug)

    // ✅ 6. symbol (ES6)

            // Unique & immutable value, mainly for object property keys.
            const sym1 = Symbol("id");
            const sym2 = Symbol("id");
            console.log(sym1 === sym2); // false (always unique)

    // ✅ 7. bigint (ES11/ES2020)

        //    For very large integers beyond Number.MAX_SAFE_INTEGER (2^53 - 1).

        let big = 123456789012345678901234567890n;
        console.log(typeof big); // "bigint"


    //⚠️ Cannot mix bigint and number directly:
        // console.log(10n + 20); // ❌ TypeError 


//=========================================================================================================================================

//Non-Primitives

// 3. Non-Primitives)
    //👉 Objects store key-value pairs and are stored by reference.

    // ✅ 1. Object

        const person = { name: "Shivam", age: 25 };
        console.log(person.name); // Shivam

    // ✅ 2. Array

        // Ordered collection of elements (indexed).
        let arr = [1, 2, 3];
        arr.push(4);
        console.log(arr); // [1, 2, 3, 4]

    // ✅ 3. Function

        // In JS, functions are first-class objects.

        // Can be stored in variables, passed as arguments, or returned.

        function greet() { return "Hello"; }
        console.log(typeof greet); // "function" (special kind of object)

    // ✅ 4. Date

            // Represents date & time.
            let now = new Date();
            console.log(now.toISOString());


    // ✅ 5. Other Objects

                // RegExp → pattern matching

                // Map/Set/WeakMap/WeakSet → collections

                // Error → error handling


//  Type Checking

console.log(typeof 123);        // "number"
console.log(typeof "hi");       // "string"
console.log(typeof null);       // "object" (bug)
console.log(typeof undefined);  // "undefined"
console.log(typeof Symbol());   // "symbol"
console.log(typeof 10n);        // "bigint"
console.log(typeof []);         // "object"
console.log(typeof {});         // "object"
console.log(typeof function(){}); // "function"


//instanceof operator

console.log([] instanceof Array);    // true
console.log({} instanceof Object);   // true


// Tricky Interview Questions
//1.typeof null?
console.log(typeof null); // "object" (legacy bug in JS)

// 2. NaN weirdness
console.log(typeof NaN); // "number"
console.log(NaN === NaN); // false

// 3. Equality with coercion
console.log(null == undefined); // true
console.log(null === undefined); // false

//4.Array quirks
console.log(typeof []); // "object"
console.log([] + []);   // "" (empty string)
console.log([1,2] + [3,4]); // "1,23,4"


//5. Symbol uniqueness
const a1 = Symbol("id");
const b1 = Symbol("id");
console.log(a1 === b1); // false

//6. BigInt mixing
console.log(1n === 1); // false
console.log(1n == 1);  // true

//7. Functions are objects
function test() {}
test.prop = "hello";
console.log(test.prop); // "hello"









