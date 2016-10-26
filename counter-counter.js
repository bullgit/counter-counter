class CounterCounter {
  constructor(selector = '#countercounter', text = 'Count!') {
    this.container = document.querySelector(selector);
    this.text = text;
    this.addStyle();
    this.count(this.container);
  }

  count(container) {
    const c = document.createElement('div');
    const button = document.createElement('button');

    c.classList.add('countercounter');

    if (typeof container.dataset.count !== 'undefined') {
      container.dataset.count = parseInt(container.dataset.count, 10) + 1;
    }
    c.dataset.count = 0;
    button.innerText = this.text;

    button.addEventListener('click', _ => {
      this.count(c);
    });

    c.appendChild(button);
    container.appendChild(c);
  }

  addStyle() {
    const rules = `
.countercounter:before {
  content: attr(data-count);
}
`;
    const style = document.createElement('style');
    style.innerHTML = rules;
    this.container.appendChild(style);
  }
}

if (typeof module !== 'undefined') module.exports = CounterCounter;
