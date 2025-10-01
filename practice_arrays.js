 const prompt = require("prompt-sync")();

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let a = prompt("Enter the element in the array: ");
// a = Number.parseInt(a.trim());   
// arr.push(a);
// console.log(arr);

//question 2
// let arr1=[1,23,34,56,34,45]
// let a
// do{
//     a = prompt("Enter the element in the array: ");
// a = Number.parseInt(a.trim());  
// arr1.push(a);
// }while(a!=0)

//     console.log(arr1)

//question 3

// let arr2=[10,20,45,50,60,34]
// let a=arr2.filter((a)=>{
//     return (a%10==0)
// })
// console.log(a)
//question 4
 
// let arr3 = [1, 2, 3, 4, 5, 6, 7];
// let n=arr3.map((a)=>{
// return a*a
// })
// console.log(n)

//question 5

let arr4 = [1, 2, 3, 4, 5];
let n=arr4.reduce((a1,a2)=>{
return a1*a2
})
console.log(n)