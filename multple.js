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

// const n = [1, 2, 3];
// {
//   const m = n;
//   m.splice(3, 0, 4, 5);

//   console.log("new array", m);
// }
// console.log(n);

const z = [1, 2, 3];
let s = [...z];
s.splice(3, 0, 4, 5);
console.log("new array",s);
console.log("old array",z);

// Filter an array of scores and return those above the average score. [70, 85, 90, 60, 88, 95, 72]
// 5)

score = [70, 85, 90, 60, 88, 95, 72];
sum1 = 0;
for (i = 0; i < 7; i++) {
  sum1 = sum1 + score[i];
}
console.log("sum",sum1);
average = sum1 / 7;

console.log("avaerage",average);

let p = score.filter((val) => {
  return val > average;
});
console.log("Filted Array",p);


// pattern program

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }

  console.log(row);
}
