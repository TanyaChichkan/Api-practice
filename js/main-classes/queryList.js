import { Controllers, controllers } from '../utils-classes/controllers.js';
import { OptionsForFetch } from '../utils-classes/optionsForFetch.js';
import {MarkUpRender} from '../utils-classes/markUpRender.js';

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
      this.list.innerHTML="";
      this.page=1;
      MarkUpRender.hideText("");
      controllers.pageReset();
      controllers.getData(this.query);

      return this.query;
    }
  }
}
