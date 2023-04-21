//1 Return a new array with the square root of all element values:
const numbers1 = [4, 9, 16, 25];
const newArr = numbers1.map(Math.sqrt);

//2 Multiply all the values in an array with 10:
const numbers2 = [65, 44, 12, 4];
const newArr2 = numbers2.map(myFunction);

function myFunction(numb) {
  return numb * 10;
}

//3 tlPrices dizisindeki rakamlarin Euro ve dolar
// karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));

console.log(euroPrices, dolarPrices);
