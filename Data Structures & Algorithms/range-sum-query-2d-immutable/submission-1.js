class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixMatrix = [];

        for (let i = 0; i < matrix.length; i++) {
            if (!this.prefixMatrix[i]) this.prefixMatrix[i] = [];
            let sum = 0;


            for (let j = 0; j < matrix[i].length; j++) {
                sum += matrix[i][j];
                this.prefixMatrix[i][j] = sum;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let f1 = 0;
        let f2 = 0;

        for (let i = row1; i <= row2; i++) {
            f1 += this.prefixMatrix[i][col2];
            f2 += (col1 > 0 ? this.prefixMatrix[i][col1 - 1] : 0);
        }

        return f1 - f2;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
