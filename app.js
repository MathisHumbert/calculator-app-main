const btns = document.querySelectorAll('button');
const displayResult = document.querySelector('.number-display');

let total = '';
let stock;
let action;
let past = false;

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // get the value
    let value = btn.textContent;
    let classL = btn.classList;
    // get the type

    // number
    if (btn.classList.contains('number')) {
      if (!past) {
        total += value;
        display(total);
      }
      if (past) {
        total = '';
        total += value;
        display(total);
        past = false;
      }
    }

    // dot
    if (btn.classList.contains('dot')) {
      total += '.';
      display(total);
    }

    // div
    if (btn.classList.contains('div')) {
      if (!stock) {
        stock = total;
        total = '';
        action = '/';
      } else {
        total = parseFloat(total);
        stock = parseFloat(stock);
        total = stock / total;
        // display
        display(total);
        stock = undefined;
        past = true;
      }
    }

    // mult
    if (btn.classList.contains('x')) {
      if (!stock) {
        stock = total;
        total = '';
        action = 'x';
      } else {
        total = parseFloat(total);
        stock = parseFloat(stock);
        total = stock * total;
        // display
        display(total);
        stock = undefined;
        past = true;
      }
    }

    // minus
    if (btn.classList.contains('minus')) {
      if (!stock) {
        stock = total;
        total = '';
        action = '-';
      } else {
        total = parseFloat(total);
        stock = parseFloat(stock);
        total = stock - total;
        // display
        display(total);
        stock = undefined;
        past = true;
      }
    }

    // plus
    if (btn.classList.contains('plus')) {
      if (!stock) {
        stock = total;
        total = '';
        action = '+';
      } else {
        total = parseFloat(total);
        stock = parseFloat(stock);
        total = stock + total;
        // display
        display(total);
        stock = undefined;
        past = true;
      }
    }

    // del
    if (btn.classList.contains('del')) {
      total = total.substring(0, total.length - 1);
      // display
      if (!total) {
        displayResult.textContent = '0';
      } else {
        display(total);
      }
    }

    // reset
    if (btn.classList.contains('reset')) {
      total = '';
      displayResult.textContent = '0';
      stock = undefined;
      past = true;
    }

    // equal
    if (btn.classList.contains('equal')) {
      total = parseFloat(total);
      stock = parseFloat(stock);
      result(action);
      stock = undefined;
      past = true;
      // display
      display(total);
    }
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
  if (action === 'x') {
    return (total = stock * total);
  }
};

// make it work
const actions = (total, stock) => {
  if (!stock) {
    stock = total;
    total = '';
  } else {
    total = parseFloat(total);
    stock = parseFloat(stock);
    total = stock + total;
    // display
    stock = undefined;
    past = true;
    return total, stock;
  }
};

const display = (total) => {
  displayResult.textContent = total;
};
