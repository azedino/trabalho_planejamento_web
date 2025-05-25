const swap = (troca, a, b) => {
  [troca[a], troca[b]] = [troca[b], troca[a]];
};

const shuffle = (troca, change) => {
  for (let i = 0; i < change; i++) {
    const A1 = Math.floor(Math.random() * troca.length);
    const A2 = Math.floor(Math.random() * troca.length);
    swap(troca, A1, A2);
  }
  return troca;
};

const bubble_sort = (troca) => {
  let len = troca.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (troca[j] > troca[j + 1]) {
        swap(troca, j, j + 1);
      }
    }
  }
  return troca;
};

const selection_sort = (troca) => {
  let len = troca.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (troca[j] < troca[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(troca, i, minIndex);
    }
  }
  return troca;
};

const particionamento = (troca, inicio, fim) => {
  const pivot = troca[fim];
  let i = inicio - 1;
  for (let j = inicio; j < fim; j++) {
    if (troca[j] <= pivot) {
      i++;
      swap(troca, i, j);
    }
  }
  swap(troca, i + 1, fim);
  return i + 1;
};

const quick_sort = (troca, inicio = 0, fim = troca.length - 1) => {
  if (inicio < fim) {
    const pIndex = particionamento(troca, inicio, fim);
    quick_sort(troca, inicio, pIndex - 1);
    quick_sort(troca, pIndex + 1, fim);
  }
  return troca;
};