function printTableOfThree() {
    let result = '';
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += 3; 
        result += `3*${i}=`;
        for (let j = 0; j < i; j++) {
            result += '3';
            if (j < i - 1) {
                result += '+';
            }
        }

        result += `=${sum}\n`;
    }

    console.log(result);
}
printTableOfThree();
