class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans =[];
        const n = nums.length;
        for(let i=0; i<n*2;i++){
            
            ans[i]= i<n ? nums[i] 
            : nums[i-n];
        }
        return ans;
        // retun [...nums,...nums];
    }
}
