class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const ans = [];
        for(let i =0; i<n*2; i++){
            ans[i] = nums[i] ?? nums[i-n];
        }
        return ans;
    }
}
