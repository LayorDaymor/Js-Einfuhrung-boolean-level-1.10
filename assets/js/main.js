let a = true;
let b = false;

let x = 10;
let y = 15;
let z = 20;

/* a "AND" b. */
console.log(a && b);
/* a "OR" b. */
console.log(a || b);
/* NICHT a AND b. */
console.log(!(a && b))

/* ob x größer als z ist AND x größer als y ist. */
console.log( x > y && x > z);
/* ob x NICHT gleich y ist. */
console.log( x != y );
/* ob z kleiner als y ist OR z größer als x ist. */
console.log( z < y || z > x );
/* ob x gleich z ist OR x NICHT gleich y ist. */ 
console.log( x == z || x != y );
/* ob x größer oder gleich 10 ist AND y kleiner oder gleich 10 ist.
*/
console.log( x >= 10 && y <= 10 );
/* ob x multipliziert mit z kleiner als 100 ist OR ob x multipliziert mit y größer als 100 ist.
 */
console.log( x*z < 100 ||x*y > 10 );