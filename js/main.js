let home = document.getElementById('home');
let start = document.getElementById('start');
let htmlPage = document.getElementById('first-q');
let scoreSection = document.getElementById('score-section');
let htmlPrev = document.getElementById('html-prev');
let htmlNext = document.getElementById('html-next');
let marketPage = document.getElementById('second-q');


let marketplaceBack = document.getElementById('marketplace-back');

start.addEventListener('click', function () {
    home.classList.add('home-hide');
    htmlPage.classList.remove('first-q-hide');
    scoreSection.classList.remove('score-section-hide');
})
htmlPrev.addEventListener('click', function () {
    home.classList.remove('home-hide');
    scoreSection.classList.add('score-section-hide');
    htmlPage.classList.add('first-q-hide');
})
htmlNext.addEventListener('click', function () {
    htmlPage.classList.add('first-q-hide');
    marketPage.classList.remove('second-q-hide');
})
marketplaceBack.addEventListener('click', function () {
    marketPage.classList.add('second-q-hide');
    htmlPage.classList.remove('first-q-hide');
})

// Html page

let markupp = document.getElementById('markup').value;
let programee = document.getElementById('programe').value;
let scriptt = document.getElementById('script').value;
let htmlOtherr = document.getElementById('htmlOther').value;

let htmlAns = [markup, programe, script, htmlOther];


for (let i = 0; i < htmlAns.length; i++) {
    const MarkupLanguage = htmlAns[0];
    const ProgramingLanguage = htmlAns[1];
    const ScriptLanguage = htmlAns[2];
    const Other = htmlAns[3];

    function markup() {
        markupp = MarkupLanguage;
    }
    function programe() {
        programee = ProgramingLanguage;
    }
    function script() {
        scriptt = ScriptLanguage;
    }
    function htmlOther() {
        htmlOtherr = Other;
    }

    document.getElementById('html-submit').addEventListener('click', function () {

        let score = document.getElementById('score');
        let htmlBg = document.getElementById('html-bg');
        

        if (markupp == MarkupLanguage) {
            console.log('hhhh');
            score.innerHTML = 4;
            htmlBg.style.background = 'green';
            htmlBg.style.color = 'white';
            
        }
        // if (programee == ProgramingLanguage) {
        //     console.log('y');
        // }
        // else if (scriptt == ScriptLanguage) {
        //     console.log('hhhbnnnnnh');
        // }
        // else if (htmlOtherr == Other) {
        //     console.log('hhhbnnnnnh');
        // }
        else {
            console.log('ffffff');
            score.innerHTML = 0;
            htmlBg.style.background = 'red';
            htmlBg.style.color = 'white';
        }
        document.getElementById('html-submit').classList.add('html-btn-hide');
    })
}

// Marketplace page

let upworkk = document.getElementById('upwork').value;
let fiverrr = document.getElementById('fiverr').value;
let freelancerr = document.getElementById('freelancer').value;
let guruu = document.getElementById('guru').value;

let marketplaceAns = [upwork, fiverr, freelancer, guru];


for (let i = 0; i < marketplaceAns.length; i++) {
    const upworkMarket = marketplaceAns[0];
    const fiverrMarket = marketplaceAns[1];
    const freelancerMarket = marketplaceAns[2];
    const guruMarket = marketplaceAns[3];

    function upwork() {
        upworkk = upworkMarket;
    }
    function fiverr() {
        fiverrr = fiverrMarket;
    }
    function freelancer() {
        freelancerr = freelancerMarket;
    }
    function guru() {
        guruu = guruMarket;
    }

    document.getElementById('marketplace-submit').addEventListener('click', function () {

        let tScore = document.getElementById('score');
        let marketplaceScr = document.getElementById('score').innerHTML;
        let marketplaceBg = document.getElementById('marketplace-bg');
        

        // if (upwork == upwork) {
        //     console.log('hhhh');
        //     score.innerHTML = 10;
        //     htmlBg.style.background = 'green';
        //     htmlBg.style.color = 'white';
            
        // }
        if (fiverrr == fiverrMarket) {
            console.log('y');
            // let n = 2;
            tScore.innerHTML = parseInt( marketplaceScr) + 1;
            marketplaceBg.style.background = 'green';
            marketplaceBg.style.color = 'white';
        }
        // else if (scriptt == ScriptLanguage) {
        //     console.log('hhhbnnnnnh');
        // }
        // else if (htmlOtherr == Other) {
        //     console.log('hhhbnnnnnh');
        // }
        else {
            console.log('ffffff');
            tScore.innerHTML = parseInt(marketplaceScr) - 1;
            marketplaceBg.style.background = 'red';
            marketplaceBg.style.color = 'white';
        }
        document.getElementById('marketplace-submit').classList.add('marketplace-btn-hide');
    })
}






// let score = document.getElementById('score');
// let scorer = document.getElementById('score').innerHTML;
// console.log(parseInt(scorer) + 10);





// markup.addEventListener('click', function (){
//     let markupValue = document.getElementById('markup').value;
//     console.log(markupValue);
// })



// function markup() {
//     let markup = document.getElementById('markup').value;
//     return;
// }
// console.log();