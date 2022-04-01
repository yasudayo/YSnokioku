let gamen = document.getElementById("gamen");
let reds = document.getElementById("red");
let blues = document.getElementById("bule");
let yellows = document.getElementById("yellow");
let greens = document.getElementById("green");
let meireis = document.getElementById("meirei");
const title1 = document.getElementById("title1");
const hajimeru1 = document.getElementById("hajimeru");
const rule1 = document.getElementById("rule");
let ruletext = document.getElementById("ruletext");
let hajimeruSe = new Audio("oto.mp3");
let startSe = new Audio("start.mp3");
let hikariSe = new Audio("hikari.mp3");
let keikokuSe = new Audio("keikoku.mp3");
let hajimeruyo = false;
let hikatta = [];
let answer = [];
let count = 2;
let count2 = 3;
let count3 = 4;
let count4 = 5;
let timer;
meireis.innerText = "はじめるボタンを押してね。";
gamen.style.backgroundColor = "gray";


function hajimeru() {
    hajimeruyo = true;
    gamen.style.backgroundColor = "black";
    reds.style.backgroundColor = "#f5f5f5";
    blues.style.backgroundColor = "#f5f5f5";
    yellows.style.backgroundColor = "#f5f5f5";
    greens.style.backgroundColor = "#f5f5f5";
    meireis.style.color = "white";
    meireis.innerText = "STARTボタンを押してね。"
    hajimeruSe.play();
    hajimeru1.remove();
    rule1.remove();
    title1.remove();
    ruletext.remove();
}

function rule() {
    hajimeruSe.play();
    meireis.innerText = "";
    ruletext.style.color = "white";
    ruletext.innerText = "赤、青、黄、緑がランダムで点滅します。\n　点滅した色と順番を記憶して、\n ボタンをクリックしてください。\n \nLEVEL10をクリアしたらゲームクリアです。 \n \n はじめるボタンを押してね。";
}

function start() {
    if (hajimeruyo === true) {
        startSe.play();
        starttimer();
        meireis.innerText = "記憶せよ。";

        function starttimer() {
            timer = setInterval(toi, 1000);
        }
        function toi() {
            reds.style.backgroundColor = "white";
            blues.style.backgroundColor = "white";
            yellows.style.backgroundColor = "white";
            greens.style.backgroundColor = "white";
            count--;
            if (count !== 0) {
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
            } else if (count === 0) {
                clearInterval(timer);
                meireis.innerText = "光った場所を順番通りにクリックしてください。";
                reds.style.backgroundColor = "white";
                blues.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                reds.onclick = red;
                blues.onclick = bule;
                yellows.onclick = yellow;
                greens.onclick = green;
                function red() {
                    if (hikatta[0] === "red") {
                        reds.style.backgroundColor = "red";
                        hikariSe.play();
                        answer.push("red");
                        alert("成功　LEVEL2")
                        count2;
                        timer = setInterval(seikou1, 1000);
                        reds.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                }
                function bule() {
                    if (hikatta[0] === "blue") {
                        blues.style.backgroundColor = "blue";
                        hikariSe.play();
                        answer.push("blue");
                        alert("成功　LEVEL2");
                        count2;
                        timer = setInterval(seikou1, 1000);
                        blues.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                }
                function yellow() {
                    if (hikatta[0] === "yellow") {
                        yellows.style.backgroundColor = "yellow";
                        hikariSe.play();
                        answer.push("yellow");
                        alert("成功　LEVEL2");
                        count2;

                        timer = setInterval(seikou1, 1000);
                        yellows.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                }
                function green() {
                    if (hikatta[0] === "green") {
                        greens.style.backgroundColor = "green";
                        hikariSe.play();
                        answer.push("green");
                        alert("成功　LEVEL2");
                        count2;
                        timer = setInterval(seikou1, 1000);
                        greens.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                }
            }
        }
        function seikou1() {
            reds.style.backgroundColor = "white";
            blues.style.backgroundColor = "white";
            yellows.style.backgroundColor = "white";
            greens.style.backgroundColor = "white";
            meireis.innerText = "記憶せよ。";
            count2--;
            if (count2 !== 0) {
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
            } else if (count2 === 0) {
                hikatta.shift();
                clearInterval(timer);
                meireis.innerText = "光った場所を順番通りにクリックしてください。";
                reds.style.backgroundColor = "white";
                blues.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                reds.onclick = red2;
                blues.onclick = bule2;
                yellows.onclick = yellow2;
                greens.onclick = green2;

                function red2() {
                    if (hikatta[0] === "red"&& answer.length === 0) {
                        reds.style.backgroundColor = "red";
                        hikariSe.play();
                        answer.push("red");
                    } else if (hikatta[1] === "red"&& answer.length === 1) {
                        reds.style.backgroundColor = "red";
                        hikariSe.play();
                        answer.push("red");
                        reds.style.backgroundColor = "white";

                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]) {
                        alert("成功　LEVEL3");
                        count3;
                        timer = setInterval(seikou2, 1000);
                        reds.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
                function bule2() {
                    if (hikatta[0] === "blue"&& answer.length === 0) {
                        blues.style.backgroundColor = "blue";
                        hikariSe.play();
                        answer.push("blue");
                    } else if (hikatta[1] === "blue"&& answer.length === 1) {
                        blues.style.backgroundColor = "blue";
                        hikariSe.play();
                        answer.push("blue");
                        blues.style.backgroundColor = "white";

                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }

                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]) {
                        alert("成功　LEVEL3");
                        count3;
                        timer = setInterval(seikou2, 1000);
                        blues.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
                function yellow2() {
                    if (hikatta[0] === "yellow"&& answer.length === 0) {
                        yellows.style.backgroundColor = "yellow";
                        hikariSe.play();
                        answer.push("yellow");
                    } else if (hikatta[1] === "yellow"&& answer.length === 1) {
                        yellows.style.backgroundColor = "yellow";
                        hikariSe.play();
                        answer.push("yellow");
                        yellows.style.backgroundColor = "white";

                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]) {
                        alert("成功　LEVEL3");
                        count3;
                        timer = setInterval(seikou2, 1000);
                        yellows.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
                function green2() {
                    if (hikatta[0] === "green" && answer.length === 0) {
                        greens.style.backgroundColor = "green";
                        hikariSe.play();
                        answer.push("green");
                    } else if (hikatta[1] === "green"&& answer.length === 1) {
                        greens.style.backgroundColor = "green";
                        hikariSe.play();
                        answer.push("green");
                        greens.style.backgroundColor = "white";

                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]) {
                        alert("成功　LEVEL3");
                        count3;
                        timer = setInterval(seikou2, 1000);
                        greens.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();

                    }
                }
            }
        }

        function seikou2() {
            reds.style.backgroundColor = "white";
            blues.style.backgroundColor = "white";
            yellows.style.backgroundColor = "white";
            greens.style.backgroundColor = "white";
            meireis.innerText = "記憶せよ。";
            count3--;
            if (count3 !== 0) {
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
            } else if (count3 === 0) {
                hikatta.shift();
                hikatta.shift();
                clearInterval(timer);
                meireis.innerText = "光った場所を順番通りにクリックしてください。";
                reds.style.backgroundColor = "white";
                blues.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                reds.onclick = red3;
                blues.onclick = bule3;
                yellows.onclick = yellow3;
                greens.onclick = green3;

                function red3() {
                    reds.style.backgroundColor = "red";
                    blues.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    if (hikatta[0] === "red" && answer.length === 0) {
                        reds.style.backgroundColor = "red";
                        hikariSe.play();
                        answer.push("red");
                    } else if (hikatta[1] === "red" && answer.length === 1) {
                        reds.style.backgroundColor = "red";
                        blues.style.backgroundColor = "white";
                        yellows.style.backgroundColor = "white";
                        greens.style.backgroundColor = "white";
                        hikariSe.play();
                        answer.push("red");
                        reds.style.backgroundColor = "red";

                    } else if (hikatta[2] === "red" && answer.length === 2) {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2]) {
                        alert("成功　LEVEL4");
                        count4;
                        timer = setInterval(seikou3, 1000);
                        reds.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
                function bule3() {
                    blues.style.backgroundColor = "blue";
                    reds.style.backgroundColor = "white";
                    yellows.style.backgroundColor = "white";
                    greens.style.backgroundColor = "white";
                    if (hikatta[0] === "blue" && answer.length === 0) {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2]) {
                        alert("成功　LEVEL4");
                        count4;
                        timer = setInterval(seikou3, 1000);
                        blues.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
                function yellow3() {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2]) {
                        alert("成功　LEVEL4");
                        count4;
                        timer = setInterval(seikou3, 1000);
                        yellows.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
                function green3() {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2]) {
                        alert("成功　LEVEL4");
                        count4;
                        timer = setInterval(seikou3, 1000);
                        greens.style.backgroundColor = "white";
                        answer = [];
                        startSe.play();
                    }
                }
            }
        }

        function seikou3() {
            reds.style.backgroundColor = "white";
            blues.style.backgroundColor = "white";
            yellows.style.backgroundColor = "white";
            greens.style.backgroundColor = "white";
            meireis.innerText = "記憶せよ。";
            count4--;
            if (count4 !== 0) {
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
            } else if (count4 === 0) {
                hikatta.shift();
                hikatta.shift();
                hikatta.shift();
                clearInterval(timer);
                meireis.innerText = "光った場所を順番通りにクリックしてください。";
                reds.style.backgroundColor = "white";
                blues.style.backgroundColor = "white";
                yellows.style.backgroundColor = "white";
                greens.style.backgroundColor = "white";
                reds.onclick = red4;
                blues.onclick = bule4;
                yellows.onclick = yellow4;
                greens.onclick = green4;

                function red4() {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2] && hikatta[3] === answer[3]) {
                        alert("成功　LEVEL5");
                        main2();
                        reds.style.backgroundColor = "white";
                    }
                }
                function bule4 () {
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

                    }  else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2] && hikatta[3] === answer[3]) {
                        alert("成功　LEVEL5");
                        main2();
                        blues.style.backgroundColor = "white";
                    }
                }
                function yellow4 () {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2] && hikatta[3] === answer[3]) {
                        alert("成功　LEVEL5");
                        main2();
                        yellows.style.backgroundColor = "white";
                        
                    }
                }
                function green4 () {
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
                    }  else if (hikatta[3] === "green"&& answer.length === 3) {
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
                    } else {
                        keikokuSe.play();
                        alert("チャレンジ失敗");
                        document.location.reload();
                    }
                    if (hikatta[0] === answer[0] && hikatta[1] === answer[1]
                        && hikatta[2] === answer[2] && hikatta[3] === answer[3]) {
                        alert("成功　LEVEL5");
                        main2();
                        greens.style.backgroundColor = "white";
                    }
                }
            }
        }

    } else if (hajimeruyo === false) {
        alert("はじめるボタンを押してください");
    }
}