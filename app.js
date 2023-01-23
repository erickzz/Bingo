const botao4x4 = document.getElementById('4x4');
const botao5x5 = document.getElementById('5x5');
const areaBotoesBingo = document.getElementById('areaBotoesBingo');
const bingoEl = document.getElementById('bingo');
const botaoAplicar = document.getElementById('aplicar');
const textAreaEl = document.getElementById('textarea');

let tamanho = 0;

let checkEvents = 0;

let resetCelulas = 0;

const tamanhoBingo = (tamanhoVar) => {
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
    if (resetCelulas == 1) {
      resetarCelulas();
      bingo.eventsBingo();
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
    if (resetCelulas == 1) {
      resetarCelulas();
      bingo.eventsBingo();
    }
  }
  resetCelulas = 1;
  return bingo;
};

function resetarCelulas() {
  for (const value of bingo.tamanho) {
    value.className = '';
  }
  document.getElementById('linha1').classList.remove('visibilidade');
  document.getElementById('linha2').classList.remove('visibilidade');
  document.getElementById('linha3').classList.remove('visibilidade');
  document.getElementById('linha4').classList.remove('visibilidade');
  document.getElementById('coluna1').classList.remove('visibilidade');
  document.getElementById('coluna2').classList.remove('visibilidade');
  document.getElementById('coluna3').classList.remove('visibilidade');
  document.getElementById('coluna4').classList.remove('visibilidade');
  document.getElementById('diagonalEsquerda').classList.remove('visibilidade');
  document.getElementById('diagonalDireita').classList.remove('visibilidade');
}

const textArea = [];

const bingo = {
  tamanho: 0,
  eventsBingo() {
    if (checkEvents == 0) {
      for (let i = 0; i < this.tamanho.length; i++) {
        this.tamanho[i].addEventListener('click', this.mudarCor.bind(this, i));
      }
      checkEvents = 1;
    }
  },
  arrayTexto() {
    return textAreaEl.value.trim().split('\n');
  },
  renderizarBotoes() {
    text = this.arrayTexto();
    textAreaSize = text.length;
    if (text == '' || tamanho == 0) {
      return (areaBotoesBingo.innerHTML = null);
    }
    areaBotoesBingo.innerHTML = null;
    /* for (const value of this.tamanho) {
      console.log(value);
      areaBotoesBingo.append(value);
    } */
    if (tamanho == 4) {
      for (let i = 0; i < text.length && i < 16; i++) {
        areaBotoesBingo.append(this.tamanho[i]);
        this.tamanho[i].innerHTML = '';
        this.tamanho[i].innerText = text[i];
        if (
          this.tamanho[i].innerText == 'undefined' ||
          this.tamanho[i].innerText == ''
        ) {
          this.tamanho[i].innerText = '*vazio*';
        }
      }
    }

    if (tamanho == 5) {
      for (let i = 0; i < text.length && i < 25; i++) {
        areaBotoesBingo.append(this.tamanho[i]);
        this.tamanho[i].innerHTML = '';
        this.tamanho[i].innerText = text[i];
        if (
          this.tamanho[i].innerText == 'undefined' ||
          this.tamanho[i].innerText == ''
        ) {
          this.tamanho[i].innerText = '*vazio*';
        }
      }
    }
    this.eventsBingo();
  },
  mudarCor(i) {
    console.log(this.tamanho[i]);
    this.tamanho[i].classList.toggle('botaoBingoAtivo');
    this.verificarBingo();
  },
  verificarBingo() {
    if (tamanho == 4 && textAreaSize == 16) {
      if (
        this.tamanho[0].className == 'botaoBingoAtivo' &&
        this.tamanho[1].className == 'botaoBingoAtivo' &&
        this.tamanho[2].className == 'botaoBingoAtivo' &&
        this.tamanho[3].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('linha1').classList.add('visibilidade');
      } else {
        document.getElementById('linha1').classList.remove('visibilidade');
      }
      if (
        this.tamanho[4].className == 'botaoBingoAtivo' &&
        this.tamanho[5].className == 'botaoBingoAtivo' &&
        this.tamanho[6].className == 'botaoBingoAtivo' &&
        this.tamanho[7].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('linha2').classList.add('visibilidade');
      } else {
        document.getElementById('linha2').classList.remove('visibilidade');
      }
      if (
        this.tamanho[8].className == 'botaoBingoAtivo' &&
        this.tamanho[9].className == 'botaoBingoAtivo' &&
        this.tamanho[10].className == 'botaoBingoAtivo' &&
        this.tamanho[11].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('linha3').classList.add('visibilidade');
      } else {
        document.getElementById('linha3').classList.remove('visibilidade');
      }
      if (
        this.tamanho[12].className == 'botaoBingoAtivo' &&
        this.tamanho[13].className == 'botaoBingoAtivo' &&
        this.tamanho[14].className == 'botaoBingoAtivo' &&
        this.tamanho[15].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('linha4').classList.add('visibilidade');
      } else {
        document.getElementById('linha4').classList.remove('visibilidade');
      }
      if (
        this.tamanho[0].className == 'botaoBingoAtivo' &&
        this.tamanho[4].className == 'botaoBingoAtivo' &&
        this.tamanho[8].className == 'botaoBingoAtivo' &&
        this.tamanho[12].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('coluna1').classList.add('visibilidade');
      } else {
        document.getElementById('coluna1').classList.remove('visibilidade');
      }
      if (
        this.tamanho[1].className == 'botaoBingoAtivo' &&
        this.tamanho[5].className == 'botaoBingoAtivo' &&
        this.tamanho[9].className == 'botaoBingoAtivo' &&
        this.tamanho[13].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('coluna2').classList.add('visibilidade');
      } else {
        document.getElementById('coluna2').classList.remove('visibilidade');
      }
      if (
        this.tamanho[2].className == 'botaoBingoAtivo' &&
        this.tamanho[6].className == 'botaoBingoAtivo' &&
        this.tamanho[10].className == 'botaoBingoAtivo' &&
        this.tamanho[14].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('coluna3').classList.add('visibilidade');
      } else {
        document.getElementById('coluna3').classList.remove('visibilidade');
      }
      if (
        this.tamanho[3].className == 'botaoBingoAtivo' &&
        this.tamanho[7].className == 'botaoBingoAtivo' &&
        this.tamanho[11].className == 'botaoBingoAtivo' &&
        this.tamanho[15].className == 'botaoBingoAtivo'
      ) {
        document.getElementById('coluna4').classList.add('visibilidade');
      } else {
        document.getElementById('coluna4').classList.remove('visibilidade');
      }
      if (
        this.tamanho[0].className == 'botaoBingoAtivo' &&
        this.tamanho[5].className == 'botaoBingoAtivo' &&
        this.tamanho[10].className == 'botaoBingoAtivo' &&
        this.tamanho[15].className == 'botaoBingoAtivo'
      ) {
        document
          .getElementById('diagonalEsquerda')
          .classList.add('visibilidade');
      } else {
        document
          .getElementById('diagonalEsquerda')
          .classList.remove('visibilidade');
      }
      if (
        this.tamanho[3].className == 'botaoBingoAtivo' &&
        this.tamanho[6].className == 'botaoBingoAtivo' &&
        this.tamanho[9].className == 'botaoBingoAtivo' &&
        this.tamanho[12].className == 'botaoBingoAtivo'
      ) {
        document
          .getElementById('diagonalDireita')
          .classList.add('visibilidade');
      } else {
        document
          .getElementById('diagonalDireita')
          .classList.remove('visibilidade');
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
