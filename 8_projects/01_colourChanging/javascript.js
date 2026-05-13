let button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let colour = e.target.id;

        if(colour == 'blue'){
            body.style.backgroundColor = colour;
        }
        if(colour == 'green'){
            body.style.backgroundColor = colour;
        }
        if(colour == 'yellow'){
            body.style.backgroundColor = colour;
        }
        if(colour == 'purple'){
            body.style.backgroundColor = colour;
        }
    })
})

// button.forEach(function(item) {
//     item.addEventListener('click', function(e){
//         let colour = e.target.id;

//         if(colour == 'blue'){
//             body.style.backgroundColor = colour;
//         }
//         if(colour == 'yellow'){
//             body.style.backgroundColor = colour;
//         }
//         if(colour == 'green'){
//             body.style.backgroundColor = colour;
//         }
//         if(colour == 'purple'){
//             body.style.backgroundColor = colour;
//         }
//     })
// })



// const button = document.querySelectorAll('.button')
// const body  = document.querySelector('body')

// button.forEach(function (b){
//     b.addEventListener('click',function(e){
//         if(e.target.id === 'blue')
//             body.style.backgroundColor = e.target.id;
        
//         if(e.target.id === 'yellow')
//             body.style.backgroundColor = e.target.id;
        
//         if(e.target.id === 'green')
//             body.style.backgroundColor = e.target.id;
        
//         if(e.target.id === 'purple')
//             body.style.backgroundColor = e.target.id;
//     })
// })


