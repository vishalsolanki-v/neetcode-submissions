class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length) return false;
  const obj1 ={};
  const obj2 = {};

  for(let i = 0; i<s.length; i++){
    obj1[s[i]] = obj1[s[i]] ? obj1[s[i]] + 1 : 1;
  }
  for(let i = 0; i<t.length; i++){
    obj2[t[i]] = obj2[t[i]] ? obj2[t[i]] + 1 : 1;
  }
console.log(obj1,obj2)
for(const item in obj1){
  console.log(item,obj1[item],obj2[item])
  if(obj1[item] !== obj2[item] ){

    return false;
  }
}
return true;
    }
}
