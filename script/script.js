
const GameBoradObject = (function() {
    let GameBorad = [{1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}]
        PlayerX = (row) => {
            const object = GameBorad[0]
            if (object[row] === '') object[row] = 'x'
            else console.error('Already Seleted')
            console.table(GameBorad[0])
        }
        PlayerO = (row) => {
            const object = GameBorad[0]
            if (object[row] === '') object[row] = 'o'
            else console.error('Already Seleted')
            console.table(GameBorad[0])
        }
        Logic = function() {
            let Winner 
                if (GameBorad[0][1] ==='x' && GameBorad[0][2] === 'x' && GameBorad[0][3] ==='x' 
                || GameBorad[0][4] ==='x' && GameBorad[0][5] === 'x' && GameBorad[0][6] ==='x'
                || GameBorad[0][7] ==='x' && GameBorad[0][8] === 'x' && GameBorad[0][9] ==='x'
                || GameBorad[0][1] ==='x' && GameBorad[0][4] === 'x' && GameBorad[0][7] ==='x'
                || GameBorad[0][2] ==='x' && GameBorad[0][5] === 'x' && GameBorad[0][8] ==='x'
                || GameBorad[0][3] ==='x' && GameBorad[0][6] === 'x' && GameBorad[0][9] ==='x'
                || GameBorad[0][1] ==='x' && GameBorad[0][5] === 'x' && GameBorad[0][9] ==='x'
                || GameBorad[0][3] ==='x' && GameBorad[0][5] === 'x' && GameBorad[0][7] ==='x'
            ) {
                Winner = "Player X Won this round"
                GameBorad[0] = {1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}
            }
                if (GameBorad[0][1] ==='o' && GameBorad[0][2] === 'o' && GameBorad[0][3] ==='o' 
                || GameBorad[0][4] ==='o' && GameBorad[0][5] === 'o' && GameBorad[0][6] ==='o'
                || GameBorad[0][7] ==='o' && GameBorad[0][8] === 'o' && GameBorad[0][9] ==='o'
                || GameBorad[0][1] ==='o' && GameBorad[0][4] === 'o' && GameBorad[0][7] ==='o'
                || GameBorad[0][2] ==='o' && GameBorad[0][5] === 'o' && GameBorad[0][8] ==='o'
                || GameBorad[0][3] ==='o' && GameBorad[0][6] === 'o' && GameBorad[0][9] ==='o'
                || GameBorad[0][1] ==='o' && GameBorad[0][5] === 'o' && GameBorad[0][9] ==='o'
                || GameBorad[0][3] ==='o' && GameBorad[0][5] === 'o' && GameBorad[0][7] ==='o'
            ) {
                Winner = "Player O Won this round"
                GameBorad[0] = {1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}
            }
            return Winner
        }
        return{PlayerX, PlayerO, GameBorad, Logic}
})()


