function init() {
    questions.forEach((element, index) => {
        var divv;
        var itemt="";
        itemt += `<div class='qstneach'><h3 class='question'>${index + 1}.${element.q}</h3>`;
        element.o.forEach((elemen, inde) => {
            itemt += `<input type="radio" class="opt" name="opt${index}" id="opt${index}${inde}" required><label for="opt${index}${inde}">${elemen}</label><br>`;
            
        });
divv=document.createElement('div');
divv.innerHTML=itemt;
divv.className="qstneach";
divv.style.backgroundColor=`#1D69D9`
document.getElementById('mainQuiz').appendChild(divv);
    });
}
function scoring() {
    var score = 0;
    var array = [];
    questions.forEach((element, index) => {
        array.push(`opt${index}${element.a}`);
    });
    var selectedans = [];
    array.forEach((element, index) => {
        selectedans.push(document.querySelector(`input[name="opt${index}"]:checked`).id);
    });
    array.forEach((element, index) => {
        if (element == selectedans[index]) {
            score++;
        }
    });
    document.getElementById("score").innerHTML = `<h3>You Got ${score} on 6</h3>`;
    if (score > 0) {
        document.getElementById("score").innerHTML += `<h4>Here's your reward:A merciful glance</h4><img src="reward.jpg" id="reward"></img>`
    } else {
        document.getElementById("score").innerHTML += `<h4>Here's your reward for visiting:A merciful glance</h4><img src="reward.jpg" id="reward"></img>`

    }
    showAnswers(selectedans);

}
function showAnswers(selectedans) {
    document.getElementById('mainQuiz').innerHTML = "";
    questions.forEach((element, index) => {
        var divv;
    var itemt="";
        itemt += `<h3 class='question'>${index + 1}.${element.q}</h3>`;
        element.o.forEach((elemen, inde) => {
            itemt += `<input type="radio" class="opt" name="opt${index}" id="opt${index}${inde}" disabled><label for="opt${index}${inde}">${elemen}</label><br>`;
        });
        itemt += `<p>Correct Answer:${element.o[element.a]}</p>`;
        itemt += `<p>${element.ae}</p>`;
        divv=document.createElement('div');
divv.innerHTML=itemt;
divv.className="qstneach";
divv.style.backgroundColor=`#1D69D9`
document.getElementById('mainQuiz').appendChild(divv);
    });
    selectedans.forEach((element,index) => {
        document.getElementById(selectedans[index]).checked=true;
    });
    document.getElementById('reward').scrollIntoView();
    document.getElementById('submitbtn').style.display = `none`;
}