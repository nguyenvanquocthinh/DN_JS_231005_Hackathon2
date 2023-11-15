//bai1

let num = [1, 2, 3, 4, 5];

let max_val = num.reduce(function (accumulator, element) {
  return accumulator > element ? accumulator : element;
});
console.log(num);
console.log("max= ", max_val);

//bai2

let arrayNumber = [9, 2, 3, 7, 1];
let sum = 0;

function isprime(n) {
  let flag = 1;

  if (n < 2) return (flag = 0);

  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }

  return flag;
}

/*Tìm và liệt kê các số nguyên tố trong mảng*/
for (let i = 0; i < arrayNumber.length; i++) {
  if (isprime(arrayNumber[i]) == 1) {
    console.log(arrayNumber[i]);
    //Tính tổng

    sum += arrayNumber[i];
  }
}
console.log(sum);

//  bai5
const text = prompt("nhập vào 1 dòng chữ");
let textArr = text.split(" ");
let nghichDao = textArr.map((tu) => tu.split("").reverse().join(""));
let result = nghichDao.join(" ");
console.log(result);
