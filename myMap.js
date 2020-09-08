let testMass = ['hello', 'h', 0, -1, 98, true, null, 8.9, false, undefined, 2.4];

// console.log(testMass.map((item) => typeof(item) === 'string' ? item.length : item));

console.log(myMap(testMass, (item) => typeof(item) === 'string' ? item.length : item));

function myMap(array, callbackfn) {
    let tempArr = [];

    for (let index = 0; index < array.length; index++) {
        const item = array[index];

        tempArr[index] = callbackfn(item, index, array);
    }

    return tempArr;
}