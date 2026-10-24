let number = [1, 2, 3, 4, 1, 2, 3, 1];
for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
        if (number[i] == number[j]) {
            console.log(number[i])
            break;
        }
    }
}