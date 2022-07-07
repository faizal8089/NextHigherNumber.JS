function NextHigherNumber(num) {
  //code here...
  let numArray = NumToArray(num);
  const startPos = numArray.length - 1;
  //to check array is sorted or not from right
  let sortedCheck = isDescending(numArray);
  function isDescending(arr) {
    return arr.slice(1).every((num, i) => num <= arr[i]);
  }
  if (numArray.length <= 1 || sortedCheck) {
    console.log("input : " + num + " output : none");
  } else {
    //find d1
    for (var i = startPos; i >= 0; i--) {
      if (numArray[i] < numArray[i - 1]) {
        continue;
      } else {
        d1 = i - 1;
        break;
      }
    }
    //new tempArray to store digits right of d1
    const tempArray = [];
    for (var i = startPos; i > d1; i--) {
      tempArray.unshift(numArray[i]);
    }
    //find d2 element (d2El) from tempArray
    let d2El;
    for (var i = 0; i <= tempArray.length; i++) {
      if (tempArray[i] > numArray[d1]) {
        d2El = tempArray[i];
      }
    }
    //find d2 with d2El in numArray
    let d2;
    for (var i = startPos; i >= 0; i--) {
      d2 = numArray.indexOf(d2El);
    }
    //swap numArray indexes d1 and d2;
    const swappedArray = swapArrayValues(numArray, d1, d2);
    //newTemp Array to store elements right of original d1 position
    const newTempArray = [];
    for (var i = startPos; i > d1; i--) {
      newTempArray.unshift(swappedArray[i]);
    }
    //sort newTempArray;
    newTempArray.sort(function (a, b) {
      return a - b;
    });
    //strip the left portion of d1 of swappedArray to new array
    const leftArray = [];
    for (var i = 0; i <= d1; i++) {
      leftArray.push(swappedArray[i]);
    }https://github.com/faizal8089/NextHigherNumber.JS.git
    //join leftArray and newTempArray
    const resultArray = leftArray.concat(newTempArray);
    console.log("input : " + num + " output : " + ArrayToNum(resultArray));
  }
}

//Inputs

NextHigherNumber(1234);
NextHigherNumber(4132);
NextHigherNumber(32876);
NextHigherNumber(32841);
NextHigherNumber(4321);
NextHigherNumber();
NextHigherNumber(0);
NextHigherNumber(1);

//fn to swap two numbers in specific indexes
function swapArrayValues(array, index1, index2) {
  return Object.values({
    ...array,
    [index1]: array[index2],
    [index2]: array[index1],
  });
}

//fn to turn array digits into a number;
function ArrayToNum(array) {
  return Number(array.join(""));
}

//fn to split a number to digits array...
function NumToArray(num) {
  const array = [];
  let remainder;
  let sum = 0;
  while (num > 0) {
    remainder = Math.floor(num % 10);
    array.unshift(remainder);
    sum = sum * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return array;
}
