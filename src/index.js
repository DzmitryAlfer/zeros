module.exports = function getZerosCount(number) {

  let numberOf2 = 0;
  let numberOf5 = 0;

  for(let i = 1; i <= number; i++) {
    let test = i

    while(test % 2 === 0) {
      numberOf2++;
      test /= 2;
    }

    while(test % 5 === 0) {
      numberOf5++;
      test /= 5;
    }
  }

  return numberOf2 > numberOf5 ? numberOf5 : numberOf2;
}