let str = "it was a wonderful day it is a beautiful day awesome day";
let str1 = str.split(" ");
let count = {}; //store empty object each word and count occurence
for (let i = 0; i < str1.length; i++) {
    let word = str1[i];
    if (count[word]) {
        count[word]++;
    }
    else {
        count[word] = 1;
    }
}
for (let result in count) {
    if (count[result] > 1)
        console.log(result + "=" + count[result])
}
    