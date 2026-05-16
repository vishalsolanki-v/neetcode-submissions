class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

          if(nums.length<=1) return nums;
  const pivot = Math.ceil(nums.length/2);
  const leftArr =this.sortArray(nums.slice(0,pivot));
  const rightArr = this.sortArray(nums.slice(pivot));
  
  const mergeArr = (left,right)=>{
    let i= 0; let j = 0;
    const n = left.length;const m = right.length;
    const res = [];
    while(n>i && m>j){
      if(left[i] > right[j]){
        res.push(right[j]);
        j++;
      }
      else if(left[i]<right[j]){
        res.push(left[i]);
        i++;
      }
      else{
        res.push(...[left[i],left[i]]);
        i++;
        j++;
      }
    }
    while(i<n){
      res.push(left[i]);
      i++;
    }
    while(j<m){
      res.push(right[j]);
      j++;
    }
    
    return res;
  }
  
  
  return mergeArr(leftArr,rightArr);
    }
}
