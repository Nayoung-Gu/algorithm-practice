// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// let result = [];

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result.push(i, j);
//                 return result;
//             }
//         }
//     }
// };

const twoSum = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];

        if (another in map) {
            return [map[another], i];
        }

        map[nums[i]] = i;
    }

    return null;
};
