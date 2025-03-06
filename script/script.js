let macaco = document.getElementById('macaco');
let pontuacao = document.getElementById('pontuacao');

let botao_loja = document.getElementById('botao_loja');
let botao_loja2 = document.getElementById('botao_loja2');
let loja = document.getElementById('loja');
let loja2 = document.getElementById('loja2');
let fecha = document.getElementById('fecha');
let fecha2 = document.getElementById('fecha2');

let custo_clicker = document.getElementById('custo_clicker');
let clicker_upgrade = document.getElementById('clicker_upgrade');
let clicker_level = document.getElementById('level_clicker');

let bananas_clicker = document.getElementById('custo_bananas');
let bananas_upgrade = document.getElementById('bananas_upgrade'); 
let bananas_level = document.getElementById('level_bananas');

let bananeira_clicker = document.getElementById('custo_bananeira');
let bananeira_upgrade = document.getElementById('bananeira_upgrade'); 
let bananeira_level = document.getElementById('level_bananeira');

let casca_clicker = document.getElementById('custo_casca');
let casca_upgrade = document.getElementById('casca_upgrade'); 
let casca_level = document.getElementById('level_casca');

let cacho_clicker = document.getElementById('custo_cacho');
let cacho_upgrade = document.getElementById('cacho_upgrade'); 
let cacho_level = document.getElementById('level_cacho');

let minion_clicker = document.getElementById('custo_minion');
let minion_upgrade = document.getElementById('minion_upgrade'); 
let minion_level = document.getElementById('level_minion');

let bpc_text = document.getElementById('bpc_text');
let bps_text = document.getElementById('bps_text');

let bpc = parseInt(localStorage.getItem('bpc')) || 1;
let bps = parseInt(localStorage.getItem('bps')) || 0;
let score = parseInt(localStorage.getItem('pontuacao')) || 0;

pontuacao.innerHTML = score;
bpc_text.innerHTML = bpc;
bps_text.innerHTML = bps;

function aumenta_ponto(event) {
    score += bpc;
    pontuacao.innerHTML = score;
    localStorage.setItem('pontuacao', score);

    const x = event.clientX;
    const y = event.clientY;

    const div = document.createElement('div');
    div.innerHTML = `+${Math.round(bpc)}`; 
    div.style.cssText = `color: black; position: absolute; top: ${y}px; left: ${x}px; font-size: 30px; pointer-events: none;`;

    const img = document.createElement('img');
    img.src = '../img/banana.png'; 
    img.style.cssText = `position: absolute; top: ${y - 30}px; left: ${x - 30}px; width: 35px; height: 35px; pointer-events: none;`;

    document.body.appendChild(img); 
    document.body.appendChild(div); 

    img.classList.add('fade-up');
    div.classList.add('fade-up');

    timeout(div);
    timeout(img);
}

const timeout = (div) => {
  setTimeout(() => {
    div.remove();
  }, 800);
}
macaco.addEventListener("click", aumenta_ponto);

function compra_click() {
    if(score >= parseInt(custo_clicker.innerHTML)) {
        score -= parseInt(custo_clicker.innerHTML);
        pontuacao.innerHTML = score;
        clicker_level.innerHTML = parseInt(clicker_level.innerHTML) + 1;
        bpc += 1;
        custo_clicker.innerHTML = parseInt(custo_clicker.innerHTML) + 10;
        localStorage.setItem('bpc', bpc);
        localStorage.setItem('pontuacao', score);
        localStorage.setItem('clicker_level', clicker_level.innerHTML);
        localStorage.setItem('custo_clicker', custo_clicker.innerHTML);
    } else {
        alert("Você não tem bananas suficientes para comprar o próximo nível");
    }
}

clicker_upgrade.addEventListener('click', compra_click);

function compra_bananas() {
    if(score >= parseInt(bananas_clicker.innerHTML)){
        score -= parseInt(bananas_clicker.innerHTML);
        pontuacao.innerHTML = score;
        bananas_level.innerHTML = parseInt(bananas_level.innerHTML) + 1;
        bps += 4;
        bananas_clicker.innerHTML = parseInt(bananas_clicker.innerHTML) + 100;
        localStorage.setItem('bps', bps);
        localStorage.setItem('pontuacao', score);
        localStorage.setItem('bananas_level', bananas_level.innerHTML);
        localStorage.setItem('bananas_clicker', bananas_clicker.innerHTML);
    } else {
        alert("Você não tem bananas suficientes para comprar o próximo nível");
    }
}

bananas_upgrade.addEventListener('click', compra_bananas);

function compra_bananeira() {
    if(score >= parseInt(bananeira_clicker.innerHTML)){
        score -= parseInt(bananeira_clicker.innerHTML);
        pontuacao.innerHTML = score;
        bananeira_level.innerHTML = parseInt(bananeira_level.innerHTML) + 1;
        bps += 24;
        bananeira_clicker.innerHTML = parseInt(bananeira_clicker.innerHTML) + 200;
        localStorage.setItem('bps', bps);
        localStorage.setItem('pontuacao', score);
        localStorage.setItem('bananeira_level', bananeira_level.innerHTML);
        localStorage.setItem('bananeira_clicker', bananeira_clicker.innerHTML);
    } else {
        alert("Você não tem bananas suficientes para comprar o próximo nível");
    }
}

bananeira_upgrade.addEventListener('click', compra_bananeira);

function compra_casca() {
    if(score >= parseInt(casca_clicker.innerHTML)){
        score -= parseInt(casca_clicker.innerHTML);
        pontuacao.innerHTML = score;
        casca_level.innerHTML = parseInt(casca_level.innerHTML) + 1;
        bps += 50;
        casca_clicker.innerHTML = parseInt(casca_clicker.innerHTML) + 500;
        localStorage.setItem('bps', bps);
        localStorage.setItem('pontuacao', score);
        localStorage.setItem('casca_level', casca_level.innerHTML);
        localStorage.setItem('casca_clicker', casca_clicker.innerHTML);
    } else {
        alert("Você não tem bananas suficientes para comprar o próximo nível");
    }
}

casca_upgrade.addEventListener('click', compra_casca);

function compra_cacho() {
    if(score >= parseInt(custo_cacho.innerHTML)){
        score -= parseInt(custo_cacho.innerHTML);
        pontuacao.innerHTML = score;
        cacho_level.innerHTML = parseInt(cacho_level.innerHTML) + 1;
        bpc += 30;
        custo_cacho.innerHTML = parseInt(custo_cacho.innerHTML) + 1000;
        localStorage.setItem('bpc', bpc);
        localStorage.setItem('pontuacao', score);
        localStorage.setItem('cacho_level', cacho_level.innerHTML);
        localStorage.setItem('custo_cacho', custo_cacho.innerHTML);
    } else {
        alert("Você não tem bananas suficientes para comprar o próximo nível");
    }
}

cacho_upgrade.addEventListener('click', compra_cacho);

function compra_minion() {
    if(score >= parseInt(minion_clicker.innerHTML)){
        score -= parseInt(minion_clicker.innerHTML);
        pontuacao.innerHTML = score;
        minion_level.innerHTML = parseInt(minion_level.innerHTML) + 1;
        bps += 99999999999999;
        minion_clicker.innerHTML = parseInt(minion_clicker.innerHTML) + 200;
        localStorage.setItem('bps', bps);
        localStorage.setItem('pontuacao', score);
        localStorage.setItem('minion_level', minion_level.innerHTML);
        localStorage.setItem('minion_clicker', minion_clicker.innerHTML);
    } else {
        alert("Você não tem bananas suficientes para comprar o próximo nível");
    }
}

minion_upgrade.addEventListener('click', compra_minion);

setInterval(() => {
    score += bps;
    pontuacao.innerHTML = score;
    bpc_text.innerHTML = bpc;
    bps_text.innerHTML = bps;
    localStorage.setItem('pontuacao', score);
}, 1000);

function mostrarLoja() {
    loja.style.display = "block";
}

function esconderLoja() {
    loja.style.display = "none";
}

function mostrarLoja2() {
    loja2.style.display = "block";
}

function esconderLoja2() {
    loja2.style.display = "none";
}

botao_loja.addEventListener('click', mostrarLoja);
fecha.addEventListener('click', esconderLoja);

botao_loja2.addEventListener('click', mostrarLoja2);
fecha2.addEventListener('click', esconderLoja2);


function carregarDados() {
    clicker_level.innerHTML = localStorage.getItem('clicker_level') || 0;
    custo_clicker.innerHTML = localStorage.getItem('custo_clicker') || 10;

    bananas_level.innerHTML = localStorage.getItem('bananas_level') || 0;
    bananas_clicker.innerHTML = localStorage.getItem('bananas_clicker') || 130;

    bananeira_level.innerHTML = localStorage.getItem('bananeira_level') || 0;
    bananeira_clicker.innerHTML = localStorage.getItem('bananeira_clicker') || 850;

    casca_level.innerHTML = localStorage.getItem('casca_level') || 0;
    casca_clicker.innerHTML = localStorage.getItem('casca_clicker') || 1000;

    cacho_level.innerHTML = localStorage.getItem('cacho_level') || 0;
    custo_cacho.innerHTML = localStorage.getItem('custo_cacho') || 1200;

    minion_level.innerHTML = localStorage.getItem('minion_level') || 0;
    minion_clicker.innerHTML = localStorage.getItem('minion_clicker') || 9999999999999;
}

carregarDados();
