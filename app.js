const btns = document.querySelectorAll('button');

let total = '';
let stock;
let action;

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // get the value
    let value = btn.textContent;
    let classL = btn.classList;
    // get the type

    // number
    if (btn.classList.contains('number')) {
      total += value;
    }

    // dot
    if (btn.classList.contains('dot')) {
      total += '.';
    }

    // div
    if (btn.classList.contains('div')) {
      if (!stock) {
        stock = total;
        total = '';
        action = '/';
      } else {
        total = parseInt(total);
        stock = parseInt(stock);
        total = stock / total;
        // display
        stock = undefined;
      }
    }

    // mult
    if (btn.classList.contains('x')) {
      if (!stock) {
        stock = total;
        total = '';
      } else {
        total = parseInt(total);
        stock = parseInt(stock);
        total = stock * total;
        // display
        stock = undefined;
      }
    }

    // minus
    if (btn.classList.contains('minus')) {
      if (!stock) {
        stock = total;
        total = '';
      } else {
        total = parseInt(total);
        stock = parseInt(stock);
        total = stock - total;
        // display
        stock = undefined;
      }
    }

    // plus
    if (btn.classList.contains('plus')) {
      if (!stock) {
        stock = total;
        total = '';
      } else {
        total = parseInt(total);
        stock = parseInt(stock);
        total = stock + total;
        // display
        stock = undefined;
      }
    }

    // del
    if (btn.classList.contains('del')) {
      total = total.substring(0, total.length - 1);
      // display
    }

    // reset
    if (btn.classList.contains('reset')) {
      total = '';
      stock = undefined;
    }

    // equal
    if (btn.classList.contains('equal')) {
      total = parseInt(total);
      stock = parseInt(stock);
      result(action);
      stock = undefined;
      // display
    }

    console.log(total);
    console.log(stock);
  });
});

const result = (action) => {
  if (action === '/') {
    return (total = stock / total);
  }
  if (action === '+') {
    return (total = stock + total);
  }
  if (action === '-') {
    return (total = stock - total);
  }
  if (action === '*') {
    return (total = stock * total);
  }
};

// make it work
const actions = (total, stock) => {
  if (!stock) {
    stock = total;
    total = '';
  } else {
    total = parseInt(total);
    stock = parseInt(stock);
    total = stock + total;
    // display
    stock = undefined;
    return total, stock;
  }
};
