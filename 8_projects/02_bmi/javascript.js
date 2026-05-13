const form = document.querySelector('form')
form.addEventListener('submit',  function (e){
  e.preventDefault();
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  let result = document.querySelector('#results')
  if(height < 0 || weight == '' || isNaN(height)){
    result.innerHTML = `<span>please enter a valid height</span>`
  }
  else if(weight < 0 || height == '' || isNaN(weight)){
    result.innerHTML = `<span>please enter a valid weight</span>`
  }
  else{
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let categorey = ''
    if(bmi < 18.6) categorey += 'under weight'
    else if(bmi >= 18.6 && bmi <= 24.9) categorey += 'normal'
    else categorey +='over weight'

    result.innerHTML = `<span>your BMI is : ${bmi} and you fall into ${categorey} category</span>`
  }
})


// const form = document.querySelector('form')

// form.addEventListener('submit', function(e){
//   e.preventDefault(); // necessary to prevent the default nature of form submission
//   const height = document.querySelector('#height').value
//   const weight = document.querySelector('#weight').value
//   const result = document.querySelector('#results')
//   if(height < 0 || height == "" || isNaN(height)){
//     result.innerHTML = `<span>Please enter valid height</span>`
//   }
//   else if(weight <0 || weight == '' || isNaN(weight)){
//     result.innerHTML = `<span>Please enter valid weight</span>`
    
//   }else{
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
//     let category = ''
    
//     if(bmi < 18.6) {
//       category += `Under weight`
//     }else if(bmi <= 24.9 && bmi >= 18.6){
//       category += `normal`
//     }else{
//       category += `over weight`
//     }


//     result.innerHTML = `<span>Your bmi is: ${bmi}</span> and your categorey is ${category}`
//   }
  
// })


// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const result = document.querySelector("#results");

//   if (height < 0 || height == "" || isNaN(height)) {
//     result.innerHTML = `<span>enter valid height ${height}</span>`;
//   } else if (weight < 0 || weight == "" || isNaN(weight)) {
//     result.innerHTML = `<span>enter valid weight ${weight}</span>`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     let category = "";

//     if (bmi < 18.6) {
//       category = "Underweight";
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       category = "Normal";
//     } else {
//       category = "Overweight";
//     }
//     result.innerHTML = `<span>your BMI is : ${bmi} --- category - <b> ${category} </b> </span>`;
//   }
// });
