let string  = ""
let buttons = document.querySelectorAll('.button')

let display = document.querySelector('input')

Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', function(e){
        
        if(e.target.innerHTML == '='){
            string = eval(string)
            display.value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = ''
            display.value = string
        }
        else if(e.target.innerHTML == 'DE'){
            string = string.slice(0, -1);
            display.value = string
        }
        else{   
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML
            display.value = string
        }
    })
})
