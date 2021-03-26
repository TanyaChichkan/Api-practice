import { MarkUpRender } from '../utils-classes/markUpRender.js';

class Controllers {
  constructor(query) {
    (this.page = 1), (this.query = query);
  }

  async getData(query = this.query) {
    try {
      const data = await fetch(
        `https://api.punkapi.com/v2/beers?page=${this.page}&per_page=4&beer_name=${query}`
      )
        .then((response) => response.json())
        .then((result) => result);

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
      list.innerHTML += item;
    }

    if (value.error) {
      MarkUpRender.renderText(value.error);
    }
  }
}

export const controllers = new Controllers();
