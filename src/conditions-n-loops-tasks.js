/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a > b) {
    if (a > c) {
      max = a;
    }
  } else if (a < b) {
    if (b > c) {
      max = b;
    }
  } else {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = false;
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    king.x - king.y - (queen.x - queen.y) === 0 ||
    king.x + king.y - (queen.x + queen.y) === 0
  ) {
    result = true;
  }
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  if (
    (a + b > c && c > 0 && a === b) ||
    (b + c > a && a > 0 && b === c) ||
    (a + c > b && b > 0 && a === c)
  ) {
    result = true;
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  if (num <= 10) {
    result = roman[num - 1];
  }
  if (num > 10) {
    const first = Math.floor(num / 10);
    const second = num % 10;
    for (let i = 0; i < first; i += 1) {
      result += roman[9];
    }
    result += roman[second - 1];
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let number = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus ';
        break;
      case ',':
      case '.':
        result += 'point ';
        break;
      case '1':
        result += 'one ';
        break;
      case '2':
        result += 'two ';
        break;
      case '3':
        result += 'three ';
        break;
      case '4':
        result += 'four ';
        break;
      case '5':
        result += 'five ';
        break;
      case '6':
        result += 'six ';
        break;
      case '7':
        result += 'seven ';
        break;
      case '8':
        result += 'eight ';
        break;
      case '9':
        result += 'nine ';
        break;
      case '0':
        result += 'zero ';
        break;
      default:
        result = 'no number';
    }
  }
  for (let i = 0; i < result.length - 1; i += 1) {
    number += result[i];
  }
  return number;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let opposite = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    opposite += str[i];
  }
  return opposite === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  for (let i = 0; i < String(num).length; i += 1) {
    if (digit === +String(num)[i]) {
      result = true;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;
  let left = 0;
  let right = 0;
  for (let i = 1; i < arr.length - 1; i += 1) {
    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }
    for (let k = i + 1; k <= arr.length - 1; k += 1) {
      right += arr[k];
    }
    if (left === right) {
      result = i;
    }
    left = 0;
    right = 0;
  }
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let z = 0;
  let n = size - 1;
  let k = 1;
  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }
  let i = z;
  let j = z;
  for (z; z <= Math.floor(size / 2); z += 1) {
    for (j; j <= n; j += 1) {
      if (i < z) i = z;
      if (arr[i][j] === 0) {
        arr[i][j] = k;
        k += 1;
      }
    }
    for (i; i <= n; i += 1) {
      if (j > n) j = n;
      if (arr[i][j] === 0) {
        arr[i][j] = k;
        k += 1;
      }
    }
    for (j; j >= z; j -= 1) {
      if (i > n) i = n;
      if (arr[i][j] === 0) {
        arr[i][j] = k;
        k += 1;
      }
    }
    for (i; i >= z; i -= 1) {
      if (j < z) j = z;
      if (arr[i][j] === 0) {
        arr[i][j] = k;
        k += 1;
      }
    }
    n -= 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const length = matrix.length - 1;
  const result = matrix;
  for (let i = 0; i <= length / 2; i += 1) {
    [result[i], result[length - i]] = [result[length - i], result[i]];
  }
  for (let i = 0; i <= length; i += 1) {
    for (let j = i + 1; j < result[i].length; j += 1) {
      [result[i][j], result[j][i]] = [result[j][i], result[i][j]];
    }
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  function merge(l, r) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < l.length && j < r.length) {
      if (l[i] < r[j]) {
        result[k] = l[i];
        i += 1;
        k += 1;
      } else {
        result[k] = r[j];
        j += 1;
        k += 1;
      }
    }
    while (i < l.length) {
      result[k] = l[i];
      i += 1;
      k += 1;
    }
    while (j < r.length) {
      result[k] = r[j];
      j += 1;
      k += 1;
    }
    return result;
  }

  if (result.length <= 1) return result;
  const middle = Math.floor(result.length / 2);
  const left = [];
  const right = [];
  for (let i = 0; i < middle; i += 1) {
    left[i] = result[i];
  }
  for (let i = 0; i < result.length - middle; i += 1) {
    right[i] = result[middle + i];
  }
  return merge(sortByAsc(left), sortByAsc(right));
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let s = str;
  let it = iterations;
  for (let i = 1; i <= it; i += 1) {
    let even = '';
    let odds = '';
    for (let j = 0; j < s.length; j += 1) {
      if (j % 2 === 0) even += s[j];
      else odds += s[j];
    }
    s = even + odds;
    if (s === str) {
      it %= i;
      i = 0;
    }
  }

  return s;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const s = String(number);
  const length = s.length - 1;
  let k = '';
  const r = [];
  let l = [];
  let i = length;
  while (s[i] <= s[i - 1]) {
    i -= 1;
  }
  if (i < 0) return number;
  k = s[i];
  for (let j = 0; j <= length; j += 1) {
    if (j < i) l.push(s[j]);
    else r.push(s[j]);
  }
  let index = 0;
  for (let j = 0; j <= r.length; j += 1) {
    if (r[j] > l[l.length - 1] && k > r[j]) {
      k = r[j];
      index = j;
    }
  }
  r[index] = l[l.length - 1];
  l[l.length - 1] = k;
  r.sort((a, b) => a - b);
  l = [...l, ...r];
  let n = '';
  l.forEach((item) => {
    n += item;
  });
  return +n;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
