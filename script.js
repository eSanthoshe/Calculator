const display = document.querySelector(".display");
const btn = document.querySelectorAll("button");
let output = "";
const symbols = ["%","/","*","+","-","="];

btn.forEach((button) => {
button.addEventListener("click",(e) =>{
    calculate(e.target.dataset.value);
})
});

const calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnvalue === "C"){
        output = "";
    }
    else if(btnvalue === "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === "" && symbols.includes(btnvalue)){
            return;
        }
        output += btnvalue;
    }
    display.value = output;

}