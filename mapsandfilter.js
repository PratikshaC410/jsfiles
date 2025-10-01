let arr=[45,34,56]
 let a= arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
 })
  console.log(a)

  //array filter method
   let arr2=[1,2,4,5,3,67]
   let a1=arr2.filter((a)=>{
    return a<10
   })
   console.log(a1)

   //array reduce method(adds first num from the arr and then adds the next ele from the arr with the prev result)
   let arr3=[23,45,67,23]
   let newarr=arr3.reduce((h1,h2)=>{
    return h1+h2
   })
   console.log(newarr)