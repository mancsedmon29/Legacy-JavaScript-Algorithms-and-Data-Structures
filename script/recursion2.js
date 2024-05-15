function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum){
        return [];
    } else {
        var countArr = rangeOfNumbers(startNum, endNum - 1);
        countArr.push(endNum);
        return countArr;
    }
};

console.log(rangeOfNumbers(5, 15));