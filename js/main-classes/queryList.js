import {queryList} from '../utils-classes/constants.js';

export class QueryList{
    constructor(){
        this.setSelectors();
        this.setListeners();
    }

    setSelectors(){
        this.queryList = document.querySelector('.query-list');
    }

    setListeners(){
        this.queryList.addEventListener('click',e=>this.clickHandler(e));
    }

    clickHandler(e){
        console.log(e.target);
    }
}