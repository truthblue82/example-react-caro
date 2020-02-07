
const utils = {
    calculateWinner: function (squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    },

    calculateWinnerFull: function (squares) {
        let number = Math.sqrt(squares.length);
        let wnumber = (number > 5 ? 5 : number);
        let matrix = this.generateLines(squares);
        let cRow, cCol = 1, cSlash = 1, cBackslash = 1;
        let bs = [];
        
        for(let i=0; i < number; i++) {
            for(let j=0; j < number; j++) {
                //row check in i:j 
                //col check in j:i
                if(j > 0 ) {
                    if(matrix[i][j] !== null && matrix[i][j] === matrix[i][j-1]) {
                        cRow ++;
                    } else {
                        cRow = 1;
                    }

                    if(matrix[j][i] !== null && matrix[j][i] === matrix[j-1][i]) {
                        cCol ++;
                    } else {
                        cCol = 1;
                    }

                    //check slash
                    if (matrix[i][j] !== null && i === j) {
                        if(matrix[i][j] === matrix[i-1][j-1]) {
                            cSlash ++;
                        } else {
                            cSlash = 1;
                        }
                    }
                } else {
                    cRow = 1;
                }
                //check backslash
                if( i + j === number - 1) {
                    bs.push(matrix[i][j]);
                    if(matrix[i][j] !== null && bs[i] === bs[i-1]) {
                        cBackslash ++;
                    } else {
                        cBackslash = 1;
                    }
                } 

                if(cRow === wnumber || cSlash === wnumber || cBackslash === wnumber) {
                    return matrix[i][j];
                }
                if(cCol === wnumber) {
                    return matrix[j][i];
                }
            }
        }
        
        return null;
    },

    generateLines: function (squares) {
        let lines = [];
        let matrix = [];
        let number = Math.sqrt(squares.length);
        for(let i=0; i<number; i++) {
            lines = [];
            for(let j=0; j<number; j++) {
                let item = i*number + j;
                lines.push(squares[item]);
            }
            matrix.push(lines);
        }
        return matrix;
    }
}

export default utils;
