class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const myMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const m = Math.ceil(nums.length / 2);
            if (myMap.has(nums[i])) {
                myMap.set(nums[i], myMap.get(nums[i]) + 1);
            } else {
                myMap.set(nums[i], 1);
            }

            if (myMap.get(nums[i]) >= m) return nums[i];
        }
    }
}
