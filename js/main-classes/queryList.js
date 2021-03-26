import { controllers } from '../main-classes/controllers.js';

export class QueryList {
  constructor() {
    this.setSelectors();
    this.setListeners();
  }

  setSelectors() {
    this.queryList = document.querySelector('.query-list');
    this.input = document.querySelector('input');
  }

  setListeners() {
    this.queryList.addEventListener('click', (e) => this.clickHandler(e));
  }

  clickHandler(e) {
    if (e.target.nodeName === 'LI') {
      this.input.value = e.target.textContent;
      controllers.getData(e.target.textContent);
    }
  }
}
