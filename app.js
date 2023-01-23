const botao4x4 = document.getElementById('4x4');
const botao5x5 = document.getElementById('5x5');
const areaBotoesBingo = document.getElementById('areaBotoesBingo');
const bingoEl = document.getElementById('bingo');
const botaoAplicar = document.getElementById('aplicar');

let tamanho = 5;

const tamanhoBingo = (tamanhoVar) => {
  console.log('teste');
  let bingo = [];
  if (tamanhoVar == 4) {
    tamanho = 4;
    botao4x4.className = 'botaoTamanhoAtivo';
    botao5x5.className = '';
    bingoEl.className = 'bingo4x4';
    bingo = [];
    for (let i = 0; i < 16; i++) {
      bingo[i] = document.createElement('button');
    }
  } else if (tamanhoVar == 5) {
    tamanho = 5;
    botao5x5.className = 'botaoTamanhoAtivo';
    botao4x4.className = '';
    bingoEl.className = 'bingo5x5';
    bingo = [];
    for (let i = 0; i < 25; i++) {
      bingo[i] = document.createElement('button');
    }
  }
  return bingo;
};

const bingo = {
  tamanho: tamanhoBingo,
  renderizarBotoes() {
    console.log(this);
    for (const value of this.tamanho) {
      areaBotoesBingo.append(value);
    }
  },
};

//bingo.renderizarBotoes();

botao4x4.addEventListener('click', () => {
  bingo.tamanho = tamanhoBingo(4);
});

bingoTamanho = botao5x5.addEventListener('click', () => {
  bingo.tamanho = tamanhoBingo(5);
});

botaoAplicar.addEventListener('click', bingo.renderizarBotoes.bind(bingo));
