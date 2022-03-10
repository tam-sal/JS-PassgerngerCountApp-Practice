// const prompt = require('prompt-sync')();
// Terminal > New Terminal > npm install propmt-sync --no-audit
// https://www.youtube.com/watch?v=jS4aFq5-91M&t=2614s
// TimeStamp 49
//document.getElementById("count-el").innerText = 5;
// function increment() {
//     let count = 0;
//     console.log("Button was clicked!")
   
// }

// function counting(x){
//     let y = 0
//     for(x; x > y; x--){
//     console.log(x)}
// }
// counting(10)
// function increment(){
//     currentCount = document.getElementById("count-el").innerText
//     currentCount = parseInt(currentCount)
//     currentCount+=1
// -------------------------------------
// currentCount = document.getElementById("count-el").innerText
// currentCount = parseInt(currentCount)
// console.log(typeof(currentCount))
// -------------------------------------
// function sumLaps(lap1 = 34, lap2=33, lap3 = 36) {
//     let totalLaps = lap1 + lap2 + lap3
//     console.log(totalLaps)
// }
// sumLaps(lap1=10,lap2=50,lap3=40)

// let lapsCompleted = 0
// function above() {
//     lapsCompleted = lapsCompleted + 1
// }
// above()
// above()
// above()
// console.log(lapsCompleted)



let count = 0
let count_el = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    count_el.textContent = count
    console.log(count)
}

function save(){
    saveEl.textContent += " "+count+" => "
    count_el.textContent = 0
    count = 0
}



















