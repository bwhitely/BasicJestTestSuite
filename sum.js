function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    if (str.length == 0) return null;
    let reversed;
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

const calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function arrayAnalysis(array) {
    function avg(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum / arr.length;
    }
    function min(arr) {
        let min = Number.MAX_VALUE
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i]
        }
        return min
    }
    function max(arr) {
        let max = Number.MIN_VALUE
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i]
        }
        return max
    }
    return {
        average: avg(array),
        min: min(array),
        max: max(array),
        length: array.length
    }
}

export { capitalize, reverse, calculator, arrayAnalysis }