class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const myMap = new Map();
        const res = [];
        for (let i = 0; i < strs.length; i++) {
            const k = strs[i].split("").sort().join("");
            if (myMap.has(k)) {
                myMap.set(k, [...myMap.get(k), strs[i]]);
            } else {
                myMap.set(k, [strs[i]]);
            }
        }
        for (let item of myMap) {
            res.push(item[1]);
        }
        return res;
    }
}
