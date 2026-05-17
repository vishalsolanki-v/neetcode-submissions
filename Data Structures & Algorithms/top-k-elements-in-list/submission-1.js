class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
const res = [];
const myMap = new Map();
for(let i = 0; i<nums.length; i++){
    myMap.set(nums[i],myMap.get(nums[i])+1 || 1)
}
const sortedMap = [...myMap].sort((a,b)=>b[1]-a[1]).slice(0,k)
sortedMap.forEach((item)=>{
    res.push(item[0]);
})
return res;
    }
}
