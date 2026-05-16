class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0,
            j = 0;
        let k = nums.length - 1;

        while (j < k + 1 && j >= i) {
            console.log(j);
            if (nums[j] === 2) {
                const temp = nums[k];
                nums[k] = nums[j];
                nums[j] = temp;
                k--;
            } else if (nums[j] === 0) {
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j++;
            } else {
                j++;
            }
        }
    }
}
