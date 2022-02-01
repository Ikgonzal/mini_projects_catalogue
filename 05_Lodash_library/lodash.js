_ = {
  clamp (number, lower, upper) {
    if (Math.max(number, lower) === number && Math.min(number, upper) === number)
      return number;
    else if (Math.max(number, lower) === lower)
      return lower;
    else
      return upper;
  },
  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end){
      let aux;
      aux = start;
      start = end;
      end = aux;
    }
    if (number < start)
      return false;
    else if (number >= end)
      return false;
    else
      return true;
  },
  words(str) {
    return str.split(' ');
  },
  pad(str, length) {
    let newArray = [];
    if (str.length > length)
      return str;
    let startPad = Math.floor((length - str.length) / 2);
    let endPad = length - startPad - str.length;
    for (let i = 0; i < startPad; i++)
      newArray[i] = ' ';
    newArray = newArray.concat(str);
    for (let k = startPad + str.length; k < length; k++)
      newArray[k] = ' ';
    newArray = newArray.join('');
    return newArray;
  },
  has (obj, key) {
    let keys = Object.keys(obj);
    return keys.includes(key)
  },
  invert (obj) {
    var inverted = {};
    for(var key in obj){
      inverted[obj[key]] = key;
    }
    return inverted;
  },
  findKey (obj, predicate) {
    for (var key in obj) {
      if (predicate(obj.key))
        return key;
    }
    return undefined;
  },
  drop (arr, number) {
    if (!number)
      number = 1;
    return arr.slice(number);
  },
  dropWhile (array, predicate) {
    const cb = function (element, index) {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk (array, size) {
    if (!size)
      size = 1;
    let arrayChunks = [];
    let aux = size;
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
