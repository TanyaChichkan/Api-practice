import { Controllers, controllers } from '../utils-classes/controllers.js';
import { OptionsForFetch } from '../utils-classes/optionsForFetch.js';

export class QueryList extends OptionsForFetch{
  constructor() {
    super();
    this.setSelectors();
    this.setListeners();
  }

  setSelectors() {
    this.queryList = document.querySelector('.query-list');
  }

  setListeners() {
    this.queryList.addEventListener('click', (e) => this.clickHandler(e));
  }

  clickHandler(e) {
    if (e.target.nodeName === 'LI') {
      this.input.value = e.target.textContent;
      this.query = e.target.textContent;

      const contr = new Controllers();
      contr.getData(this.query);

      return this.query;
    }
  }
}
