const cache = [];

module.exports = function getZerosCount(number) {

  let numberOf2 = 0;
  let numberOf5 = 0;

  let j = 1;

  if(cache.length > 0) {
    const cachedItem = cache.find(el => el.num < number);

    if(cachedItem) {
      j = cachedItem.num + 1;
      numberOf2 = cachedItem.numberOf2;
      numberOf5 = cachedItem.numberOf5;
    }
  }

  for(let i = j; i <= number; ++i) {
    let test = i

    while(test % 5 === 0) {
      ++numberOf5;
      test /= 5;
    }
  }

  cache.push({num: number, numberOf2:numberOf2, numberOf5:numberOf5});

  cache.sort((a, b) => { return b.num - a.num});

  return numberOf5;
}