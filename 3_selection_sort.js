const array = [10, 1, 2, 7, 8, 3, 4, 5, 9,]
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }

        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }

    return array
}

console.log('selectionSort', selectionSort(array));
console.log('count = ', count);