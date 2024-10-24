let a = [1, 2, 3, 4];
let c = [];
for (i = 0; i < 4; i++) {
  b = a[i] * 2;

  console.log(b);
}

let x = [1, 2, 3, 4];
sum = 0;
for (i = 0; i < 4; i++) {
  y = sum + x[i];
  sum = y;
}
console.log("sum of numbers", y);





const n = [1, 2, 3];
{
const m = n;
m.splice(3, 0, 4, 5);

console.log("new array", m);
}
console.log(n)


const z = [1, 2, 3];
const l=()=>{
    
}

let scores = [70, 85, 90, 60, 88, 95, 72]
let total = scores.reduce((acc, curr) => acc + curr, 0) 

let avg = scores.filter(score => score > total);

console.log(avg);


