const Boxes = document.querySelectorAll('.game-board>div>button')
const Display = document.querySelector('.winnerDisplayer>p')
const OnameUnit = document.querySelector('#O')
const OscoreUnit = document.querySelector('#Oscore')
const XnameUnit = document.querySelector('#X')
const XscoreUnit = document.querySelector('#Xscore')
const restartbtn = document.querySelector('.restart>button')

let PlayerName = (function()  {
    Xscore = 0
    Oscore = 0
    RoundWinner = ''

    playerOGetter = (input) => {
        input = prompt('Enter your name Player O')
        if (input === '' ||input === null) {
            input = 'Player O'
        }
        else{
            input = input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase()
        }

        return input
    }
    playerXGetter = () => {
        input = prompt('Enter your name Player X')
        if (input === ''||input === null) {
            input = 'Player X'
        }
        else{
            input = input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase()
        }
        return input
    }
    starterLogic = (value) => {
        let decision = confirm('Randomly pick first player')
            if (decision) {
                value  = Number(Math.floor(Math.random() * 10))
            }
            if (!decision) {
                value = 0
            }
            return value
    }

    playerOne = playerOGetter()
    playerTwo = playerXGetter()
    
    OnameUnit.textContent = playerOne
    XnameUnit.textContent = playerTwo
    XscoreUnit.textContent = Xscore
    OscoreUnit.textContent = Oscore



    return {playerOne, playerTwo, starterLogic, Xscore, Oscore, RoundWinner}
})()

const GameBoradObject = (function() {
    let GameBorad = [{1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}]
    let Degit = PlayerName.starterLogic()
    let taps = 0

    starter = (starter) => {
        if (Boolean( Degit % 2)) {
            starter = `Its Your Turn ${PlayerName.playerOne}`
        }
        else starter = `Its Your Turn ${PlayerName.playerTwo}`

        return starter
    }
    Display.textContent = starter()

    PlayX = (row) => {
        const object = GameBorad[0]
        if (object[row] === '') {
            object[row] = 'x'
        }
    }

    PlayO = (row) => {
        const object = GameBorad[0]
        if (object[row] === '') {
            object[row] = 'o'
        }
    }

    restart = () => {
        GameBorad[0] = {1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}
        Degit = PlayerName.starterLogic()
        taps = 0
    }

    Play = (row) => {
            Degit++
            taps++
            
        if (Boolean(Degit % 2)) {
            PlayX(row)
            Display.textContent = `Its Your Turn ${PlayerName.playerOne}`
        }
        else if(!Boolean(Degit % 2)){
            PlayO(row)
            Display.textContent = `Its Your Turn ${PlayerName.playerTwo}`
        }

        Logic.process()

        if (taps === 9 && PlayerName.RoundWinner === '') {
            PlayerName.RoundWinner = "This round ends tie" 
            Display.textContent = PlayerName.RoundWinner
        }
        else if (PlayerName.RoundWinner !== '') Display.textContent = PlayerName.RoundWinner         
    }

    return{restart, Play, GameBorad, starter}
})()

const Logic = (function() {
    process = () => {
    if (GameBoradObject.GameBorad[0][1] ==='x' && GameBoradObject.GameBorad[0][2] === 'x' && GameBoradObject.GameBorad[0][3] ==='x' 
        || GameBoradObject.GameBorad[0][4] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][6] ==='x'
        || GameBoradObject.GameBorad[0][7] ==='x' && GameBoradObject.GameBorad[0][8] === 'x' && GameBoradObject.GameBorad[0][9] ==='x'
        || GameBoradObject.GameBorad[0][1] ==='x' && GameBoradObject.GameBorad[0][4] === 'x' && GameBoradObject.GameBorad[0][7] ==='x'
        || GameBoradObject.GameBorad[0][2] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][8] ==='x'
        || GameBoradObject.GameBorad[0][3] ==='x' && GameBoradObject.GameBorad[0][6] === 'x' && GameBoradObject.GameBorad[0][9] ==='x'
        || GameBoradObject.GameBorad[0][1] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][9] ==='x'
        || GameBoradObject.GameBorad[0][3] ==='x' && GameBoradObject.GameBorad[0][5] === 'x' && GameBoradObject.GameBorad[0][7] ==='x'
    ) {
        PlayerName.RoundWinner = PlayerName.playerTwo + ' won this round'
        PlayerName.Xscore++
        XscoreUnit.textContent = PlayerName.Xscore

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
        PlayerName.RoundWinner = PlayerName.playerOne + ' won this round'
        PlayerName.Oscore++
        OscoreUnit.textContent = PlayerName.Oscore
    } }

    return {process}
})()

const DOM = (

    () => {

        Boxes.forEach((element) => {
            element.addEventListener('click', () => {
                if (GameBoradObject.GameBorad[0][element.getAttribute('id')] === '') {
                    GameBoradObject.Play(element.getAttribute('id'))
                    element.textContent = GameBoradObject.GameBorad[0][element.getAttribute('id')]
                }
                if (PlayerName.RoundWinner !== '') {
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
                    PlayerName.RoundWinner = ''
                    Display.textContent = GameBoradObject.starter()
                })
        })
    }
)()