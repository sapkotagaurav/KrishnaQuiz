var button = document.getElementById("btn");
var question = document.getElementById("qstn");
var answers = document.getElementById("answers");
var QstnNum = 0;
var score;
function scoring() {
    try {
        var elem = document.querySelector('input[name="opt"]:checked');
        var id;
        switch (elem) {
            case null:
                console.log("none");
                break;

            default:
                id = elem.id;
        }
        if (id == `opt${questions[QstnNum-1].a}`) {
            console.log(`Qstnnum:${QstnNum}`)
            console.log("Gotcha!");
        }else{
            console.log("Gotchan!");
            console.log(`Qstnnum:${QstnNum}`)
        }

    } catch (error) {
        console.log(error);
    }
}
function init() {
    document.getElementById('qstn').innerHTML = questions[QstnNum].q;
    questions[QstnNum].o.forEach((element, index) => {
        document.getElementById('answers').innerHTML += '<input type="radio" name="opt" id="opt' + index + '"><label for="opt' + index + '">' + element + '</label><br>';
    });
    QstnNum++;
}

function increment() {
    if (QstnNum >= 5) {
        clean();
        scoring();
        document.getElementById("qstn").innerHTML = "Going Well!";
        QstnNum++;

    } else {
        scoring();
        clean();
        document.getElementById("qstn").innerHTML = questions[QstnNum].q;
        questions[QstnNum].o.forEach((element, index) => {
            document.getElementById("answers").innerHTML += `<input type="radio" name="opt" id="opt${index}"><label for="opt${index}">${element}</label><br>`;
        });
        QstnNum++;
    }

}

function clean() {
    document.getElementById('qstn').innerHTML = "";
    document.getElementById("answers").innerHTML = "";
}