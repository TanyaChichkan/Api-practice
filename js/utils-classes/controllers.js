import { MarkUpRender } from './markUpRender.js';
import { OptionsForFetch } from './optionsForFetch.js';

export class Controllers extends OptionsForFetch {
  constructor() {
    super();
  }

  async getData(query = this.query, page = this.page) {
    try {
      MarkUpRender.showLoader();
      const data = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=4&beer_name=${query}`
      )
        .then((response) => response.json())
        .then((result) => {
          this.page += 1;
          // this.input.value = ""
          return result;
        });

      this.renderFetchResult(data);
    } catch (e) {
      MarkUpRender.renderError(e.message);
    }
  }

  renderFetchResult(value) {
    if (value.length === 0 && Array.isArray(value)) {
      MarkUpRender.renderText('No items were found');
    }

    if (value.length > 0 && Array.isArray(value)) {
      const item = MarkUpRender.renderListItem(value);
      const list = MarkUpRender.renderList();
      const loadBtn = MarkUpRender.renderLoadMoreButton();
      list.innerHTML += item;
      this.query = this.input.value;
      
      loadBtn.addEventListener('click', () => this.getData(this.query,this.page));
      
    }

    if (value.error) {
      MarkUpRender.renderText(value.error);
    }
  }

  
}

export const controllers = new Controllers();
