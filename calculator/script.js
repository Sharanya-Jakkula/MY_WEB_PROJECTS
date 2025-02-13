let screen=document.querySelector(".input");
let one=document.querySelectorAll(".one");
let two=document.querySelectorAll(".two");
let AC=document.querySelector("#AC");
AC.addEventListener("click",()=>{
    screen.innerText="";
    arr.splice(0,arr.length);
})
let equal=document.querySelector("#special");
console.log(equal);
let del=document.querySelector("#del");
console.log(del);

equal.addEventListener("click",()=>{
    result(arr);
})
let arr=[];

del.addEventListener("click",()=>{
    arr.pop();
    let s="";
    for(let i of arr){
    s+=i;
    }
    screen.innerText=s;
})
one.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log(btn.innerText);
        let opr=btn.innerText;
        writeScreen(opr);
        });
    });



const writeScreen=(opr)=>{
    let s=screen.innerText;
    s=s+opr;
    arr.push(opr);
    screen.innerText=s;
}

const result=(arr)=>{
    let num1="";
    let num2="";
    let operator="";
    let idx=0;
    for(let i of arr){
        console.log(i);
    }
    for(let i of arr){
        if(i==="+"||i==="-"||i==="/"||i==="x"){
            operator+=i;
            idx++;
            break;
        }
        else{
            num1+=i;
            idx++;
        }
    }
    for(let j=idx;j<arr.length;j++){
        num2+=arr[j];
    }
    console.log("num1=",num1);
    console.log("num2=",num2);
    console.log(idx);
    console.log("operator=",operator);
    try{
    num1=Number(num1);
    num2=Number(num2);
    switch(operator){
        case "+":{
            screen.innerText=num1+num2;
            break;
                }
        case "-":{
                screen.innerText=num1-num2;
                break;
                }
        case "/":{
            screen.innerText=num1/num2;
            break;
                }
        case "x":{
                screen.innerText=num1*num2;
                break;
                }
        default:
            screen.innerText="Error";

    }
}catch(err){
    screen.innerText="Error";
}
}


