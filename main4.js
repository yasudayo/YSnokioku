function main4 () {
    let reds = document.getElementById("red");
    let blues = document.getElementById("bule");
    let yellows = document.getElementById("yellow");
    let greens = document.getElementById("green");
    let meireis = document.getElementById("meirei");
    let startSe = new Audio("start.mp3");
    let hikariSe = new Audio("hikari.mp3");
    let keikokuSe = new Audio("keikoku.mp3");
    let count10 = 11;
    let timer;
    let answer = [];
    count10;
    timer = setInterval(seikou9, 1000);
    answer = [];
    startSe.play();

    function seikou9 () {
        reds.style.backgroundColor = "white";
        blues.style.backgroundColor = "white";
        yellows.style.backgroundColor = "white";
        greens.style.backgroundColor = "white";
        meireis.innerText = "記憶せよ。";
        count10--;
        if (count10 !== 0) {
            let mondais = [reds.style.backgroundColor = "red", blues.style.backgroundColor = "blue",
            yellows.style.backgroundColor = "yellow", greens.style.backgroundColor = "green"];
            let mondai = Math.floor(Math.random() * mondais.length);

            if (mondais[mondai] === "red") {
                hikariSe.play();
                reds.style.backgroundColor = "red";
                hikatta.push(mondais[mondai]);
            } else {
                reds.style.backgroundColor = "white";
            }
            if (mondais[mondai] === "blue") {
                hikariSe.play();
                blues.style.backgroundColor = "blue";
                hikatta.push(mondais[mondai]);
            } else {
                blues.style.backgroundColor = "white";
            }
            if (mondais[mondai] === "yellow") {
                hikariSe.play();
                yellows.style.backgroundColor = "yellow";
                hikatta.push(mondais[mondai]);
            } else {
                yellows.style.backgroundColor = "white";
            }
            if (mondais[mondai] === "green") {
                hikariSe.play();
                greens.style.backgroundColor = "green";
                hikatta.push(mondais[mondai]);

            } else {
                greens.style.backgroundColor = "white";
            }
        } else if (count10 === 0) {
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            hikatta.shift();
            clearInterval(timer);
            meireis.innerText = "光った場所を順番通りにクリックしてください。";
            reds.style.backgroundColor = "white";
            blues.style.backgroundColor = "white";
            yellows.style.backgroundColor = "white";
            greens.style.backgroundColor = "white";
            reds.onclick = red10;
            blues.onclick = bule10;
            yellows.onclick = yellow10;
            greens.onclick = green10;

            function red10 () {
                reds.style.backgroundColor = "red";
                blues.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                if (hikatta[0] === "red"&& answer.length === 0) {
                    reds.style.backgroundColor = "red";
                    hikariSe.play();
                    answer.push("red");
                } else if (hikatta[1] === "red"&& answer.length === 1) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";

                } else if (hikatta[2] === "red"&& answer.length === 2) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[3] === "red"&& answer.length === 3) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[4] === "red"&& answer.length === 4) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[5] === "red"&& answer.length === 5) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }  else if (hikatta[6] === "red"&& answer.length === 6) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }  else if (hikatta[7] === "red"&& answer.length === 7) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }  else if (hikatta[8] === "red"&& answer.length === 8) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }   else if (hikatta[9] === "red"&& answer.length === 9) {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("red");
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }   else {
                    keikokuSe.play();
                    alert("チャレンジ失敗");
                    document.location.reload();
                }
                if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                    && hikatta[2] === answer[2] && hikatta[3] === answer[3]
                    && hikatta[4] === answer[4] && hikatta[5] === answer[5]
                    && hikatta[6] === answer[6] && hikatta[7] === answer[7]
                    && hikatta[8] === answer[8] && hikatta[9] === answer[9]) {
                    alert("GAMECLEAR!!");
                    document.location.reload();
                }
            }
            function bule10 () {
                blues.style.backgroundColor = "blue";
                reds.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                if (hikatta[0] === "blue"&& answer.length === 0) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                } else if (hikatta[1] === "blue"&& answer.length === 1) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";

                } else if (hikatta[2] === "blue"&& answer.length === 2) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";

                } else if (hikatta[3] === "blue"&& answer.length === 3) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";

                } else if (hikatta[4] === "blue"&& answer.length === 4) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";

                } else if (hikatta[5] === "blue"&& answer.length === 5) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[6] === "blue"&& answer.length === 6) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";

                } else if (hikatta[7] === "blue"&& answer.length === 7) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }else if (hikatta[8] === "blue"&& answer.length === 8) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[9] === "blue"&& answer.length === 9) {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("blue");
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else {
                    keikokuSe.play();
                    alert("チャレンジ失敗");
                    document.location.reload();
                }
                if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                    && hikatta[2] === answer[2] && hikatta[3] === answer[3]
                    && hikatta[4] === answer[4] && hikatta[5] === answer[5]
                    && hikatta[6] === answer[6] && hikatta[7] === answer[7]
                    && hikatta[8] === answer[8] && hikatta[9] === answer[9]) {
                    alert("GAMECLEAR!!");
                    document.location.reload();
                }
            }
            function yellow10 () {
                yellows.style.backgroundColor = "yellow";
                reds.style.backgroundColor = "white";
                blues.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                if (hikatta[0] === "yellow"&& answer.length === 0) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                } else if (hikatta[1] === "yellow"&& answer.length === 1) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";

                } else if (hikatta[2] === "yellow"&& answer.length === 2) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[3] === "yellow"&& answer.length === 3) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[4] === "yellow"&& answer.length === 4) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[5] === "yellow"&& answer.length === 5) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[6] === "yellow"&& answer.length === 6) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                } else if (hikatta[7] === "yellow"&& answer.length === 7) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }else if (hikatta[8] === "yellow"&& answer.length === 8) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }else if (hikatta[9] === "yellow"&& answer.length === 9) {
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("yellow");
                    yellows.style.backgroundColor = "yellow";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                }else {
                    keikokuSe.play();
                    alert("チャレンジ失敗");
                    document.location.reload();
                }
                if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                    && hikatta[2] === answer[2] && hikatta[3] === answer[3]
                    && hikatta[4] === answer[4] && hikatta[5] === answer[5]
                    && hikatta[6] === answer[6] && hikatta[7] === answer[7]
                    && hikatta[8] === answer[8] && hikatta[9] === answer[9]) {
                    alert("GAMECLEAR!!");
                    document.location.reload();
                }
            }

            function green10 () {
                greens.style.backgroundColor = "green";
                reds.style.backgroundColor = "white";
                blues.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                if (hikatta[0] === "green"&& answer.length === 0) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                } else if (hikatta[1] === "green"&& answer.length === 1) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";

                } else if (hikatta[2] === "green"&& answer.length === 2) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                } else if (hikatta[3] === "green"&& answer.length === 3) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                } else if (hikatta[4] === "green"&& answer.length === 4) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                } else if (hikatta[5] === "green"&& answer.length === 5) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                }else if (hikatta[6] === "green"&& answer.length === 6) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                }else if (hikatta[7] === "green"&& answer.length === 7) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                }else if (hikatta[8] === "green"&& answer.length === 8) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                }else if (hikatta[9] === "green"&& answer.length === 9) {
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    hikariSe.play();
                    answer.push("green");
                    greens.style.backgroundColor = "green";
                    reds.style.backgroundColor = "white";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                }
                else {
                    keikokuSe.play();
                    alert("チャレンジ失敗");
                    document.location.reload();
                }
                if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                    && hikatta[2] === answer[2] && hikatta[3] === answer[3]
                    && hikatta[4] === answer[4] && hikatta[5] === answer[5]
                    && hikatta[6] === answer[6] && hikatta[7] === answer[7]
                    && hikatta[8] === answer[8] && hikatta[9] === hikatta[9]) {
                    alert("GAMECLEAR!!");
                    document.location.reload();
                }
            }
        }
    }
}