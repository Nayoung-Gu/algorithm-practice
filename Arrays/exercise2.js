// Merge two sorted arrays into one array which is still sorted
// [0, 3, 4, 4, 6, 30, 31];

// My answer
function mergeSortedArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// Andrei's Explanation
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // Check input
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    while (array1Item || array2Item) {
        if (array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }
}
