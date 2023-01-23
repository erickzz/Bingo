let tamanho = 5;

const tamanhoBingo = (tamanho) => {
  let bingo = [];
  if (tamanho == 4) {
    bingo = [];
    for (let i = 0; i < 16; i++) {
      bingo[i] = document.createElement('button');
    }
  } else if (tamanho == 5) {
    bingo = [];
    for (let i = 0; i < 25; i++) {
      bingo[i] = document.createElement('button');
    }
  }
  return bingo;
};

const bingo = {
  tamanho: tamanhoBingo(tamanho),
};
