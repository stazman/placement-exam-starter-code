// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Joe Student" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')
    gb++
    total++
    console.log(gb)
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = total
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})
document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Ginger bread - button was clicked!')
    if(gb>0){
        gb--
        total--
    }
    if(gb>=0){
        document.getElementById('qty-gb').textContent = gb
        document.getElementById('qty-total').textContent = total
    }
    console.log(gb)
})
document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate chip + button was clicked!')
    cc++
    total++
    console.log(cc)
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = total
})
document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate chip - button was clicked!')
    if(cc>0){
        cc--
        total--
    }
    if(cc>=0){
        document.getElementById('qty-cc').textContent = cc
        document.getElementById('qty-total').textContent = total
    }
    console.log(cc)
})
document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar sprinkle + button was clicked!')
    sugar++
    total++
    console.log(sugar)
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = total
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar sprinkle - button was clicked!')
    if(sugar>0){
        sugar--
        total--
    }
    if(sugar>=0){
        document.getElementById('qty-sugar').textContent = sugar
        document.getElementById('qty-total').textContent = total
    }
    console.log(sugar)
})