
// calculate button
let btn_start=document.querySelector(".btn3");
// clean button
let btn_clear=document.querySelector(".btn4");



let btn_0= document.getElementsByClassName("btn")[9];
let btn_1= document.getElementsByClassName("btn")[0];
let btn_2= document.getElementsByClassName("btn")[1];
let btn_3= document.getElementsByClassName("btn")[2];
let btn_4= document.getElementsByClassName("btn")[3];
let btn_5= document.getElementsByClassName("btn")[4];
let btn_6= document.getElementsByClassName("btn")[5];
let btn_7= document.getElementsByClassName("btn")[6];
let btn_8= document.getElementsByClassName("btn")[7];
let btn_9= document.getElementsByClassName("btn")[8];
let b_add= document.getElementsByClassName("btn2")[0];
let b_minus= document.getElementsByClassName("btn2")[1];
let b_multiply= document.getElementsByClassName("btn2")[2];
let b_division= document.getElementsByClassName("btn2")[3];

let num1, num2,num3,num4,num5,num6,num7,num8,num9,num0;

let txt="";

// Function:
fun1=()=>{
num1=1;txt= txt+"1";
document.getElementById("ss").innerHTML=txt;
return num1;} 

fun2=()=>{
num2=2;
txt= txt+"2";
document.getElementById("ss").innerHTML=txt;
return num2;} 

fun3=()=>{
num3=3;
txt= txt+"3";
document.getElementById("ss").innerHTML=txt;
return num3;} 

fun4=()=>{
num4=4;
txt= txt+"4";
document.getElementById("ss").innerHTML=txt;
return num3;} 

fun5=()=>{
num5=5;
txt= txt+"5";
document.getElementById("ss").innerHTML=txt;
return num3;} 

fun6=()=>{
num6=6;
txt= txt+"6";
document.getElementById("ss").innerHTML=txt;
return num6;}

fun7=()=>{
num5=7;
txt= txt+"7";
document.getElementById("ss").innerHTML=txt;
return num7;}

fun8=()=>{
num8=8;
txt= txt+"8";
document.getElementById("ss").innerHTML=txt;
return num8;}

fun9=()=>{
num9=9;
txt= txt+"9";
document.getElementById("ss").innerHTML=txt;
return num9;}

fun0=()=>{
num0=0;
txt= txt+"0";
document.getElementById("ss").innerHTML=txt;
return num0;}

fun_add=()=>{
txt= txt+"+";
document.getElementById("ss").innerHTML=txt;}

fun_minus=()=>{
txt= txt+"-";
document.getElementById("ss").innerHTML=txt;}

fun_multiply=()=>{
txt= txt+"X";
document.getElementById("ss").innerHTML=txt;}

fun_division=()=>{
txt= txt+"÷";
document.getElementById("ss").innerHTML=txt;}


// calculate Function
f1=()=>{
let x=document.getElementById("ss").innerText;
let arr= x.split("");
let arr1=[];
let arr2=[];
let index;
let answer;


for(let i=0;i<arr.length;i++){

   if (arr[i]=="+"||arr[i]=="-"||arr[i]=="X"||arr[i]=="÷"){
    index=i;}}

for (let i=0;i<index;i++){ 
    arr1= arr1 + arr[i];}

for (let i=index+1;i<arr.length;i++){
    arr2= arr2 + arr[i];
}

let part1= parseFloat(arr1);
let part2= parseFloat(arr2);
let xx= parseInt(x)

if (arr[index]== "+")
{answer= part1 + part2;}
else if (arr[index]== "-")
{answer= part1 - part2;}
else if (arr[index]== "X")
{answer= part1 * part2;}
else if (arr[index]== "÷")
{answer= part1 / part2;}

document.getElementById("screen").innerHTML=answer;
}

// clear function
fun_clear=()=>{
    location.reload();
}



btn_1.addEventListener("click",fun1);
btn_2.addEventListener("click",fun2);
btn_3.addEventListener("click",fun3);
btn_4.addEventListener("click",fun4);
btn_5.addEventListener("click",fun5);
btn_6.addEventListener("click",fun6);
btn_7.addEventListener("click",fun7);
btn_8.addEventListener("click",fun8);
btn_9.addEventListener("click",fun9);
btn_0.addEventListener("click",fun0);
b_add.addEventListener("click",fun_add);
b_minus.addEventListener("click",fun_minus);
b_multiply.addEventListener("click",fun_multiply);
b_division.addEventListener("click",fun_division);
btn_start.addEventListener("click",f1);
btn_clear.addEventListener("click",fun_clear);
