const buttonsObjects = [
    {
        name: "1",
        value: 1,
    },
    {
        name: "2",
        value: 2,
    },
    {
        name: "3",
        value: 3,
    },
    {
        name: "4",
        value: 4,
    },
    {
        name: "5",
        value: 5,
    },
    {
        name: "6",
        value: 6,
    },
    {
        name: "7",
        value: 7,
    },
    {
        name: "8",
        value: 8,
    },
    {
        name: "9",
        value: 9,
    },
    {
        name: "0",
        value: 0,
    },
    {
        name: ".",
        value: ".",
    },
    {
        name: "plus",
        value: "+",
    },
    {
        name: "abstract",
        value: "-",
    },
    {
        name: "devise",
        value: "/",
    },
    {
        name: "multiple",
        value: "*",
    },
    {
        name: "equal",
        value: "=",
    },
    {
        name: "delete",
        value: "<",
    },
    {
        name: "clear",
        value: "C",
    },

];

let historyShown = false;
const ButtonsLabel = document.querySelector(".buttonsLabel");
const temporaryLable = document.querySelector(".calcAbc");
const resultLabel = document.querySelector(".calcResult");
const historyButton = document.querySelector("#historyButt");
const historyWrapper = document.querySelector(".historyContainer-hiden");
const historyContainer = document.querySelector(".history");

let arg = "";
let arg2 = "";
let temporary = "";
let result = 0;
let history = [];

Calculator(buttonsObjects)

function registerHistory(history, obj){
    const historyObj =`<div class="historyObject">
    <p>${obj.arg}</p>
    <p>= ${eval(obj.arg)}</p>            
    </div>`;
    historyContainer.innerHTML += historyObj;      
}
function deleteHistory(){
    historyContainer.innerHTML = "";
}
function calculate(value){
    return eval(value);

}
function updateValues(value, container){
    container.innerHTML = value;
}
function showHistory(){
    if(!historyShown){
        historyWrapper.classList.replace("historyContainer-hiden","historyContainer-show");
        historyShown = true;
    }else{   
        historyWrapper.classList.replace("historyContainer-show","historyContainer-hiden");
        historyShown = false;
    }
}
function Calculator(buttons){
    for(const buttonObject of buttonsObjects){
        let button = document.createElement("button");
        button.setAttribute('id', buttonObject.name);
        button.setAttribute('value', buttonObject.value);
        button.classList.add("clcButton");
        button.innerText = buttonObject.value;
        ButtonsLabel.append(button);
        button.onclick = () => {        
            if(!(button.value == "<" || button.value == "=" || button.value == "C" || button.value == "-" || button.value == "+" || button.value == "/" || button.value == "*")){
                arg += button.value;
                temporary += button.value;updateValues(temporary, resultLabel);
                console.log(arg);                
            }else if(button.value == "+" || button.value == "-" || button.value == "/" || button.value == "*"){
                updateValues(eval(arg) + button.value, temporaryLable);
                arg = eval(arg);
                arg += button.value;
                temporary = "";       
            }else if(button.value == "<"){
                if(temporary.length > 0){
                    temporary = temporary.slice(0, temporary.length - 1);updateValues(temporary, resultLabel);
                    arg = arg.slice(0, arg.length - 1);
                }
                console.log(temporary);
                console.log(arg);
            }else if(button.value == "="){     
                updateValues(arg + " =", temporaryLable);
                updateValues(eval(arg), resultLabel);
                registerHistory(history, {arg})   ;
            }else if(button.value == "C"){
                arg = "";updateValues(arg, resultLabel);
                temporary = "";updateValues(temporary, temporaryLable);
            }
           
        }
    }
}
