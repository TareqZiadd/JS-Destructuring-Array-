
/*
let myFriends = ['Ahmad','Sayed','Ali','Maysa'];        
let [a,b,c,d] = myFriends;
console.log(a);   // Ahmad
console.log(b);   // Sayed
console.log(c);   // Ali
console.log(d);   // Maysa
*/

/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let myFriends = ['Ahmad','Sayed','Ali','Maysa'];
let [a,b,c,d] = myFriends;
console.log(a);    // SyntaxError: Identifier 'a' has already been declared  
console.log(b);    // SyntaxError: Identifier 'a' has already been declared  
console.log(c);    // SyntaxError: Identifier 'a' has already been declared  
console.log(d);    // SyntaxError: Identifier 'a' has already been declared  
*/

/* 
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let myFriends = ['Ahmad','Sayed','Ali','Maysa'];
[a,b,c] = myFriends;
console.log(a);    // Ahmad
console.log(b);    // Sayed
console.log(c);    // Ali
console.log(d);    // 4
*/

/*     
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let myFriends = ['Ahmad','Sayed','Ali','Maysa'];
[a,b,c,d,e = 33] = myFriends;
console.log(e);  // 33
*/

/*
let a, b, rest;
[a, b] = [10, 20];
console.log(a);  // 10
console.log(b);  // 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30, 40, 50]
*/

/*
let myFriends = ["ahmed", "sayed", "ali", ["shady", "amr", "mohammad"]];
console.log(myFriends); // ["ahmed", "sayed", "ali", ["shady", "amr", "mohammad"]]
*/

/*
let [, , a, [b, , c]] = myFriends;
console.log(a); // "ali"
console.log(b); // "shady"
console.log(c); // "mohammad"
*/

/*
let book = 'VIDEO';
let video = 'BOOK'; 
[book, video] = [video, book];
console.log(book);  // BOOK
console.log(video); // VIDEO
*/







