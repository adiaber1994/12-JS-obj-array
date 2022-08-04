import { vipArr,ChangeColor } from "./vipJason.js";

console.log(vipArr);
console.dir(document);


let elem = document.querySelector('#root');
let mytitle = document.querySelector("h1");


console.log(elem);

let myInput = document.createElement("input");
myInput.setAttribute("type", "Number");

let newElem = document.createElement("div");

let mybtn = document.createElement("button");

mybtn.textContent = "click me";

elem.appendChild(myInput);
elem.appendChild(mybtn);
elem.appendChild(newElem);



console.log(myInput);

vipArr.map((vip)=>{
    elem.innerHTML+=`
    <div class = "vip-div">
    <h3>name is ${vip.name}</h3>
    <div>worth is : ${vip['worth']}</div>
    <img src="${vip['image']}"
    </div>`;
});

mybtn.addEventListener("click", () => {
    let val = myInput.value;
    console.log(val);
    myInput.value = "";
});

// let richpep = document.querySelectorAll('.vip-div');

console.dir(richpep[3])

mytitle.addEventListener('mouseover', () =>{
   mytitle.style.backgroundColor =  ChangeColor()
});

mytitle.addEventListener('mouseout', () =>{
    mytitle.style.backgroundColor = ""
 });



