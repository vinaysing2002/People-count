let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


//console.log("This is just for testing");

//console.log("This is again for te testing");

//console.log("this is the third time I am cecking ");

//function hii(num1, num2 = 2){
//    return num1 * num2;
//}
//console.log(hii(7));
