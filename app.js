function isPrime(number) {
    if (number >= 2 && number <= 10000) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

let result = isPrime(3);
console.log(result)