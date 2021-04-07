import { listWrapper,loadMore} from './constants.js';
import { MarkUpRender } from './markUpRender.js';
import { OptionsForFetch } from './optionsForFetch.js';
import {FetchURL} from './fetchURL.js';

export class Controllers extends OptionsForFetch {
  constructor() {
    super();
  }

  async getData(query = this.query,page=this.page) {
    console.log(query,page);

    try {
      MarkUpRender.showLoader();
        const data = await FetchURL.fetchURL(query,page)
        .then((response) => response.json())
        .then((result) => {
          this.page += 1;
          return result;
        });

        
        MarkUpRender.hideLoader();
        MarkUpRender.renderLoadMoreButton();
        this.renderFetchResult(data);

    } catch (e) {
      MarkUpRender.renderText(e.message);
      MarkUpRender.hideLoadMoreButton();
    }finally{
      MarkUpRender.hideLoader();
    }
  }

  renderFetchResult(value) {
    console.log(value);
    if (value.length === 0 && Array.isArray(value)) {
      MarkUpRender.renderText('No items were found or no more items to show');
      MarkUpRender.hideLoadMoreButton();
    }

    if (value.length > 0 && Array.isArray(value)) {
      const item = MarkUpRender.renderListItem(value);
      this.list.innerHTML+=item;

      this.query = this.input.value;
      
    }

    if (value.error) {
      MarkUpRender.renderText(value.error);
    }
  }

  pageReset(){
    this.page=1;
  }

  
}

export const controllers = new Controllers();
