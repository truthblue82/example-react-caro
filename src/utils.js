
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

    calculateWinnerFull: function (squares, row, col) {
        let number = Math.sqrt(squares.length);
        let matrix = this.generateLines(squares);
        let countR = 1, countC = 1;
        let x = row, y = col;
        console.log(`matrix: ${matrix}`);
        let cur = matrix[x][y];
        console.log(`current value: ${cur}`);
        //check row
        while(x - 1 >= 0 && matrix[x-1][y] == cur) {
            countR ++;
            x --;
            if(countR == 5) {
                return cur;
            }
        }
        while(x + 1 <= number && matrix[x+1][col] == cur) {
            countR ++;
            x ++;
            if(countR == 5) {
                return cur;
            }
        }
        //check col
        while(y - 1 >= 0 && matrix[row][y-1] == cur) {
            countC ++;
            y --;
            if(countC == 5) {
                return cur;
            }
        }
        while(y + 1 <= number && matrix[row][y+1] == cur) {
            countC ++;
            y ++;
            if(countC == 5) {
                return cur;
            }
        }
        //check cross slash
        //check cross backslash
    },

    generateLines: function (squares) {
        let lines = [];
        let matrix = [];
        let number = Math.sqrt(squares.length);
        console.log('number of line:' + number);
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
/*
// check rows
while(toadoX - 1 >= 0 && data[toadoX - 1][toadoY] == current)
{
    countRow ++;
     toadoX  --;
}
while(  toadoX +1 <= 14 && data[ toadoX + 1][ toadoY ] ==  current )
{
countRow ++;
toadoX  ++;
}
*/