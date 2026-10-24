let str = "it was an wonderful day";
let str1 = str.split(" ");
let result = "";

for (let i = 0; i < str1.length; i++) {
    for (let j = str1[i].length - 1; j >= 0; j--) {
        result += str1[i][j];  //result
    }
    if (i < str1.length - 1) {
        result += " "
    }
}
console.log(result);
