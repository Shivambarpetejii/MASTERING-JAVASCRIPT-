//Categories of Operators in JavaScript
        //  * Arithmetic → + - * / % **
        //  * Comparison → ==, ===, !=, !==, >, <, >=, <=
        //  * Logical → &&, ||, !, ??
        //  * Assignment → =, +=, -=, *=, /=, %=
        //  * Ternary → condition ? expr1 : expr2
        //  * Bitwise → & | ^ ~ << >> >>>
        //  * Other → typeof, instanceof, delete, in, spread/rest

//1. == vs ==  
    // ✅ Loose Equality (==)
            // Performs type coercion before comparing.
            // Tries to convert values to the same type.

            console.log(5 == "5");     // true
            console.log(0 == false);   // true
            console.log(null == undefined); // true

    //✅ Strict Equality (===)
            // No type conversion. Both value and type must match.

            console.log(5 === "5");    // false
            console.log(0 === false);  // false
            console.log(null === undefined); // false

// 🔎 Interview Trap Table (== coercion rules):

            // | Expression          | Result |
            // | ------------------- | ------ |
            // | `"0" == false`      | true   |
            // | `0 == false`        | true   |
            // | `null == undefined` | true   |
            // | `[] == false`       | true   |
            // | `[] == ![]`         | true   |
            // | `0 == "0"`          | true   |


// 3. Short-Circuiting (&& and ||)

// 👉 Logical operators return the actual value, not just true/false.

// ✅ AND (&&)
// Returns first falsy value, else last value.

console.log(0 && "hello");   // 0
console.log("hi" && "hello"); // "hello"


// ✅ OR (||)
// Returns first truthy value, else last value.

console.log(0 || "hello");  // "hello"
console.log("hi" || "hello"); // "hi"

// ✅ Nullish Coalescing (??)
// Returns first defined (not null/undefined) value.

let a = null ?? "default";
console.log(a); // "default"

let b = 0 ?? "default";
console.log(b); // 0 (not replaced, since 0 is defined)


// 4. Ternary Operator (? :)
// 👉 Short form of if-else.

let age = 20;
let type = age >= 18 ? "Adult" : "Minor";
console.log(type); // "Adult"

// ✅ Nested ternary (⚠️ not recommended, but asked in interviews):

let score = 85;
let grade = score > 90 ? "A" : score > 75 ? "B" : "C";
console.log(grade); // "B"


// 5. Bitwise Operators
// 👉 Work at the binary level (32-bit signed integers).

// | Operator | Description              | Example (5=0101, 3=0011) | Result                |          |      |          |
// | -------- | ------------------------ | ------------------------ | --------------------- | -------- | ---- | -------- |
// | `&`      | AND                      | 5 & 3 → 0101 & 0011      | 1 (0001)              |          |      |          |
// | \`       | \`                       | OR                       | 5                     | 3 → 0101 | 0011 | 7 (0111) |
// | `^`      | XOR                      | 5 ^ 3 → 0101 ^ 0011      | 6 (0110)              |          |      |          |
// | `~`      | NOT (flip bits)          | \~5                      | -6                    |          |      |          |
// | `<<`     | Left shift               | 5 << 1 → 1010            | 10                    |          |      |          |
// | `>>`     | Right shift (sign-pres.) | 5 >> 1                   | 2                     |          |      |          |
// | `>>>`    | Unsigned right shift     | -5 >>> 1                 | Large positive number |          |      |          |


console.log(5 & 3);   // 1
console.log(5 | 3);   // 7
console.log(5 ^ 3);   // 6
console.log(~5);      // -6
console.log(5 << 1);  // 10
console.log(5 >> 1);  // 2
console.log(-5 >>> 1); // 2147483645


// 6. Tricky Interview Questions

console.log([] == 0);     // true
// console.log([] === 0);    // false


console.log("5" - 2);   // 3
console.log("5" + 2);   // "52"

console.log(null || "hello"); // "hello"
console.log("hi" && 0);       // 0


let x = 10;
let result = x > 5 ? x < 15 ? "Between 5-15" : "Above 15" : "Below 5";
console.log(result); // "Between 5-15"


console.log(~~4.9); // 4 (double NOT truncates decimal)
console.log(~~-4.9); // -4


function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0 && n > 0;
}
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false


