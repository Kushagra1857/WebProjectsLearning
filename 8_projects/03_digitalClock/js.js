const clock = document.getElementById('clock')

setInterval(() => {
    const time = new Date
    clock.innerHTML = time.toLocaleTimeString()

}, 1000);


// const clock = document.getElementById('clock')


// setInterval(() => {
//     const time = new Date
//     clock.innerHTML = time.toLocaleTimeString()

// }, 1000);

