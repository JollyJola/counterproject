let addcount = document.querySelector("#addcount");
let lowercount = document.querySelector("#lowercount");
let count = document.querySelector("#count");

let counter = 0;

addcount.addEventListener("click", ()=> {
    do{counter++;}
    while(counter > 50)
    count.innerHTML = counter;
});

lowercount.addEventListener("click", ()=> {
    do{counter--;}
    while(counter < 0)
    count.innerHTML = counter;
});