class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(arr) {
        let m = "";
        if(arr.length === 1 ) return arr[0];
        for (let i = 0; i < arr[0].length; i++) {
            let k = "";
            let j = 1;
            while (j < arr.length && arr[0][0] === arr[j][0]) {
                if (arr[0][i] === arr[j][i]) {
                    k = arr[j][i];
                } else {
                    k = "";
                    break;
                }
                j++;
            }
            m = m + k;
        }
        return m;
    }
}
