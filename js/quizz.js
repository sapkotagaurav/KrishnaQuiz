
var qnn=1;
var score=0;
function increment() {

if (qnn>5) {
    document.getElementById("qstn").innerHTML=`your score ${score}`; 
    document.getElementById("answers").innerHTML="";
    document.getElementById("btn").style.visibility="invisible";
}
else
{
    if (document.querySelector('input[name="opt"]:checked').id=="opt"+questions[(qnn-1)].a) {
        score++;
    }
    document.getElementById("qstn").innerHTML=qnn+1+"."+questions[qnn].q; 
    document.getElementById("answers").innerHTML="";

questions[qnn].o.forEach((e,i) => {
document.getElementById("answers").innerHTML+='<input type="radio" name="opt" id="opt'+i+'"><label for="opt'+i+'">'+e+'</label><br>';
});   
}
qnn++;
console.log(score)
}
function init() {
console.log("%cHare %cKrishna!", "color: blue; font-size:20px;", "color: green; font-size:20px;");

document.getElementById("qstn").innerHTML=1+"."+questions[0].q; 
document.getElementById("answers").innerHTML="";

questions[0].o.forEach((e,i) => {
document.getElementById("answers").innerHTML+='<input type="radio" name="opt" id="opt'+i+'"><label for="opt'+i+'">'+e+'</label><br>';
});   
}