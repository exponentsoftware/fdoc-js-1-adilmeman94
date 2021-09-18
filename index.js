// 1.a. Write a function which count the number of occurrence of words
// in a paragraph or a sentence.The function `countWords` takes a
// paragraph and two words as parameters. It compare  which word is
// most frequently occurred in the paragraph.
// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else
// can you love. I love JavaScript if you do not love something which can give
// life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
var word1 = "love";
var word2 = "you";
const countWords = (paragraph, word1, word2) => {
  let regex = /[.]/g;
  let y = paragraph.replace(regex, "");
  let x = y.split(" ");
  //   console.log(x, "string");
  let word1Count = 0;
  let word2Count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == word1) {
      word1Count++;
    }
    if (x[i] == word2) {
      word2Count++;
    }
  }
  //   console.log(word1Count, word1);
  //   console.log(word2Count, word2);
  if (word1Count > word2Count) {
    return `The word "${word1}" more frequently occurred than word "${word2}"`;
  } else {
    return `The word "${word2}" more frequently occurred than word "${word1}"`;
  }
};

// console.log(countWords(paragraph, word1, word2));

// ================================================================================================= //

// 1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text.
// ```js
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
//     console.log(cleanText(sentence));
// `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// ```

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (sentence1) => {
  const paragraph = sentence1.replace(/[&\/\\#,+()@$~%;:*!<>{}]/g, "");
  return paragraph;
};

// console.log(cleanText(sentence));

// ================================================================================================= //

// 1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

// ```js
// const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// console.log(countWords(sentence));
// 31

const sentence1 = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

const countWords1 = (sentence) => {
  const paragraph1 = sentence.replace(/[.?]/g, "");
  const splitWord = paragraph1.split(" ");
  let singleletterCount = 0;

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length == 1) {
      singleletterCount++;
    }
  }

  //   console.log(splitWord.length, "all");
  //   console.log(singleletterCount, "single");

  const countWord = splitWord.length - singleletterCount;
  return countWord;
};

// console.log(countWords1(sentence1));

// ================================================================================================= //

// 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.
// ```js
// console.log(varietyOfWords(sentence))
// 28
// ```

const sentence2 = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

const varietyOfWords = (sentence) => {
  const paragraph1 = sentence.replace(/[.?]/g, "");
  const splitWord = paragraph1.split(" ");
  let count = 0;
  let set = new Set();

  for (let i = 0; i < splitWord.length; i++) {
    set.add(splitWord[i]);
    count = set.size;
  }
  return count;
};

// console.log(varietyOfWords(sentence2));

// ================================================================================================= //

// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```
// > It may be useful to know that you can find the length of a string by writing .length after it.

const LoopingTriangle = (number) => {
  let triangle = "";
  for (let i = 1; i <= number; i++) {
    triangle += "#";
    console.log(triangle);
  }
  console.log(triangle.length);
};

// LoopingTriangle(10);

// ================================================================================================= //

// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// ```js
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]
// ```

const sevenRandomNumbers = () => {
  let arr = [];
  while (arr.length < 7) {
    var r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

// console.log(sevenRandomNumbers());

// ================================================================================================= //

// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.
// ```js
// console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"]
// ```

const reverseArray = (arr) => {
  let reArray = [];
  while (arr.length) {
    reArray.push(arr.pop());
  }
  return reArray;
};

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));

// ================================================================================================= //

// 2.d. Write a function which check if items of an array are unique?
// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true
// ```

const checkUniqueness = (arr) => {
  //   var uniqueval = arr.filter(function (itm, i, arr) {
  //     return (i = arr.indexOf(itm));
  //   });
  //   if (arr.length > uniqueval.length) {
  //     console.log(false);
  //   } else {
  //     console.log(true);
  //   }
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
      //   console.log(false);
      return false;
    } else {
      return true;
      //   console.log(true);
    }
    //     for (let j = 1; j < arr.length; j++) {
    //       if (arr[i] == arr[j]) {
    //         console.log(arr[i]);
    //         console.log(arr[j]);
    //         return false;
    //       } else {
    //         console.log(arr[i]);
    //         console.log(arr[j]);
    //         return true;
    //       }
    //     }
  }
};

console.log(checkUniqueness([1, 2, 3, 4, 5, 2]));
