console.log("this is a check files")

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const body = document.querySelector('body')

const randomColour = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let changingColours
const colourStart = function() {
    const changeBackgroyundColour = function() {
        let colourThisTime =  randomColour()
        body.style.backgroundColor = colourThisTime
        // console.log(colourThisTime);
    }
    if(!changingColours) changingColours = setInterval(changeBackgroyundColour, 1000);
}
const stopColourChange = function(){
    clearInterval(changingColours)
    changingColours = null
}

startButton.addEventListener('click', colourStart)
stopButton.addEventListener('click', stopColourChange)