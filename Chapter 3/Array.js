function range(start, end) {
    var array = [];
    for (var i = start; i <= end; i++)
        array.push(i);
    return array;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
        total += array[i];
    return total;
}

console.log(range(1, 10));

console.log(sum(range(1, 10)));
