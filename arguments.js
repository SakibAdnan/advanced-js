function sumIt(input){
        input = [...arguments];
        for (let i = 0; i < input.length; i++) {
            const element = input[1];
            console.log(element);
        }
        return input;
}
console.log(sumIt(20, 50));