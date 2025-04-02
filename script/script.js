const Boxes = document.querySelectorAll('.game-board>div>button')
const restartbtn = document.querySelector('.restart>button')
const Win = document.querySelector('.winnerDisplayer>p')
const Player = document.querySelectorAll('.score>p')

let Winner = ''


const GameBoradObject = (function() {
    
    let GameBorad = [{1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}]

        PlayerX = (row) => {
            const object = GameBorad[0]
            if (object[row] === '') object[row] = 'x'
            else console.error('Already Seleted')
        }

        PlayerO = (row) => {
            const object = GameBorad[0]
            if (object[row] === '') object[row] = 'o'
            else console.error('Already Seleted')
        }

        Degit = 0

        restart = () => {
            GameBoradObject.GameBorad[0] = {1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}
            GameBoradObject.Degit = 0
        }

        turn = (row) => {
            if (Degit % 2 === 1) {
                PlayerX(row)
                Degit++
                console.log(Degit)
            }
            else if(Degit % 2 === 0) {
                PlayerO(row)
                Degit++
            }
            Logic()
            if (Degit === 9) Winner = 'This round ends Tie'
            Win.textContent = Winner
        }

        return{restart, turn, GameBorad, Degit}
})()


Logic = function() {
    Winner = ''

    if (GameBoradObject.GameBorad[0][1] ==='x' && GameBoradObject.GameBorad[0][2] === 'x' && GameBoradObject.GameBorad[0][3] ==='x' 
        || GameBoradObject.GameBorad[0][4] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][6] ==='x'
        || GameBoradObject.GameBorad[0][7] ==='x' && GameBoradObject.GameBorad[0][8] === 'x' && GameBoradObject.GameBorad[0][9] ==='x'
        || GameBoradObject.GameBorad[0][1] ==='x' && GameBoradObject.GameBorad[0][4] === 'x' && GameBoradObject.GameBorad[0][7] ==='x'
        || GameBoradObject.GameBorad[0][2] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][8] ==='x'
        || GameBoradObject.GameBorad[0][3] ==='x' && GameBoradObject.GameBorad[0][6] === 'x' && GameBoradObject.GameBorad[0][9] ==='x'
        || GameBoradObject.GameBorad[0][1] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][9] ==='x'
        || GameBoradObject.GameBorad[0][3] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][7] ==='x'
    ) {
        Winner = Player[1].textContent +" Won this round"
    }
    else if (GameBoradObject.GameBorad[0][1] ==='o' && GameBoradObject.GameBorad[0][2] === 'o' && GameBoradObject.GameBorad[0][3] ==='o' 
        || GameBoradObject.GameBorad[0][4] ==='o' && GameBoradObject.GameBorad[0][5] === 'o' && GameBoradObject.GameBorad[0][6] ==='o'
        || GameBoradObject.GameBorad[0][7] ==='o' && GameBoradObject.GameBorad[0][8] === 'o' && GameBoradObject.GameBorad[0][9] ==='o'
        || GameBoradObject.GameBorad[0][1] ==='o' && GameBoradObject.GameBorad[0][4] === 'o' && GameBoradObject.GameBorad[0][7] ==='o'
        || GameBoradObject.GameBorad[0][2] ==='o' && GameBoradObject.GameBorad[0][5] === 'o' && GameBoradObject.GameBorad[0][8] ==='o'
        || GameBoradObject.GameBorad[0][3] ==='o' && GameBoradObject.GameBorad[0][6] === 'o' && GameBoradObject.GameBorad[0][9] ==='o'
        || GameBoradObject.GameBorad[0][1] ==='o' && GameBoradObject.GameBorad[0][5] === 'o' && GameBoradObject.GameBorad[0][9] ==='o'
        || GameBoradObject.GameBorad[0][3] ==='o' && GameBoradObject.GameBorad[0][5] === 'o' && GameBoradObject.GameBorad[0][7] ==='o'
    ) {
        Winner = Player[0].textContent +" Won this round"
    }
    
}

const DOM = (
    () => {
        Boxes.forEach((element, index) => {
            element.addEventListener('click', () => {
                GameBoradObject.turn(index+1)
                element.textContent = GameBoradObject.GameBorad[0][index+1]
                if (Winner !== '') {
                    Boxes.forEach((element) => {
                        element.disabled = true
                    })
                }
            })
        })
        restartbtn.addEventListener('click', () => {
            GameBoradObject.restart()
                Boxes.forEach((element) => {
                    element.textContent = ''
                    element.disabled = false
                    Winner = ''
                    Win.textContent = ''
                })
        })
    }
)()