function randomfloor(a){
    return Math.floor(a)+(Math.random()<a%1)
}
function calc(growth, growthR, checkpoint, ticks, sample, over){
    let amount = 0;
    for(let i=0; i<sample; i++){
        let a = 0
        for(let b=0; b<ticks; b++){
        a+=randomfloor(growth+growthR*Math.random())
        }
        if(a>=checkpoint === over) amount++
    }
    return (amount/sample);
}
const growthinput = document.getElementById("growth");
const sampleinput = document.getElementById("sample");
const ageinput = document.getElementById("age");
const growthrinput = document.getElementById("growthr");
const whattocheck = document.getElementById("over");
const ticksinput = document.getElementById("ticks");
const exactinput = document.getElementById("exact");
const resultinput = document.getElementById("result");
function getstuffandcalc(){
    resultinput.innerHTML = Math.round(calc(Number(growthinput.value),Number(growthrinput.value),Number(ageinput.value),Number(ticksinput.value),Number(sampleinput.value),whattocheck.checked)*100*Math.pow(10,Number(exactinput.value)))/Math.pow(10,Number(exactinput.value))+"%"
}