let divs=document.querySelectorAll(".div");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".msg");
reset.addEventListener("click",()=>{
    divs.forEach((div)=>{
        div.innerText="";
    })
    msg.innerText="";
})
//adding - event listener


let i=0;
const writeIcons=(div,icon,temp,player)=>{
    index=Number(temp);
    arr[index-1]=icon;
    console.log(arr);
    checkForWinner(arr,icon,player);
    div.innerText=icon;
}
const writeToScreen=(player,icon)=>{
    str=`The Winner is ${player}`;
    msg.innerText=str;

}

const checkForWinner=(arr,icon,player)=>{
    if(arr[0]===icon&&arr[1]===icon&&arr[2]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[3]===icon&&arr[4]===icon&&arr[5]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[6]===icon&&arr[7]===icon&&arr[8]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[0]===icon&&arr[4]===icon&&arr[8]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[2]===icon&&arr[4]===icon&&arr[6]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[0]===icon&&arr[3]===icon&&arr[6]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[1]===icon&&arr[4]===icon&&arr[7]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else if(arr[2]===icon&&arr[5]===icon&&arr[8]===icon){
        console.log("Winner");
        writeToScreen(player,icon);
    }
    else{
       
    }
}

let arr=[];
player1=prompt("Enter the name of Player1 : ");
player2=prompt("Enter the name of Player2 : ");
icon1=prompt("Player1,Choose your Icon (X or O) : ");
if(icon1.toUpperCase()=="X"){
    icon1="X";
    icon2="O";
}
else if(icon1.toUpperCase()=="O"){
    icon1="O";
    icon2="X";
}
else{
    console.log("Error");
}
choice=[player1,player2];
s=`Now,it's ${choice[0]}'s turn`;
msg.innerText=s
divs.forEach((div)=>{
    div.addEventListener("click",()=>{
        temp=div.getAttribute("id");
        if(i%2==0){
            s=`Now,it's ${player2}'s turn`;
            msg.innerText=s
            writeIcons(div,icon1,temp,player1);
            i++;
        }else{
            s=`It's ${player1}'s turn`;
            msg.innerText=s
            writeIcons(div,icon2,temp,player2);
            i++;
        }
        //div.innerText=temp;
    });
});


