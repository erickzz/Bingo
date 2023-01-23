const botao4x4 = document.getElementById('4x4');
const botao5x5 = document.getElementById('5x5');
const areaBotoesBingo = document.getElementById('areaBotoesBingo');
const bingoEl = document.getElementById('bingo');
const botaoAplicar = document.getElementById('aplicar');
const textAreaEl = document.getElementById('textarea');

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

const textArea = [];

const bingo = {
  tamanho: 0,
  arrayTexto() {
    return textAreaEl.value.trim().split('\n');
  },
  renderizarBotoes() {
    const text = this.arrayTexto();
    console.log(text.length);
    areaBotoesBingo.innerHTML = null;
    /* for (const value of this.tamanho) {
      console.log(value);
      areaBotoesBingo.append(value);
    } */
    for (let i = 0; i < this.tamanho.length; i++) {
      areaBotoesBingo.append(this.tamanho[i]);
      console.log(text);
      if (text[i] != undefined) {
        this.tamanho[i].innerText = text[i];
      }
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
