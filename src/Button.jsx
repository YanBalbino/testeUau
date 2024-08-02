

function Button(){
    return(
        <button type="button" onClick={randomizar} className="botao" id="btn">Clica!</button>
    );
}


const valores = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7", 
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
};

export const nomesCharles = ["Charles", "Bharles", "Vharles", "Vargas", "Vaches", "Chaves", "Xhanatar", 
    "Chvrches", "Chucrutes", "Chuva, chuvisco, chuvarada", "Xinfrim", "Cobblestone", "Chargestone cave", 
    "Chimichanga", "My Chemical Romance", "Charleston", "Chamberlain", "Chikorita", "Chamariz", "Chompers",
    "Chechênia", "Xerxes", "Chuvoso", "Chuvisco", "Carlos Cléber", "Schecherazade", "Chimichuri", "Clóvis",
    "Cláudio", "Schneider", "Schumacher", "Cha la head cha la", "Cheiroso", "Chuchu", "Chivalry", "Cocoricó", 
    "Chai tea", "Chordyceps", "Chubby", "Cloyster", "Chicharito", "Chicote farpado", "Chorbes", "Chavinho",
    "Charrete", "Schlong", "Cumberbatch", "Charuto", "Chupetinha", "Xharles Kleithon"];


function randomizar(){
    document.getElementById("header").style.color = "#ffffff";
    document.getElementById("btn").style.color = "#ffffff";
    gerarNomeAleatorio();
    trocarBackground();
}

function numeroAleatorio(max){
    return Math.floor(Math.random() * max);
}

function gerarNomeAleatorio(){
    document.querySelector("button").innerText = nomesCharles[numeroAleatorio(nomesCharles.length)];
}

function gerarCorAleatoria(){
    var stringCor = "#";
    var numeroRandom;
    for (var i = 0; i < 6; i++){
        numeroRandom = numeroAleatorio(16);
        stringCor += valores[numeroRandom];
    }
    
    return stringCor;
}

function trocarBackground(){
    document.body.style.backgroundColor = gerarCorAleatoria();
}

export default Button