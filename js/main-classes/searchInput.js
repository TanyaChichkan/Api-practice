import {controllers} from '../utils-classes/controllers.js';
import { MarkUpRender } from '../utils-classes/markUpRender.js';
import {Storage} from '../utils-classes/storage.js';
import {queryWrapper,listWrapper} from '../utils-classes/constants.js';
import {RegExpr} from '../utils-classes/regExp.js';
import { OptionsForFetch } from '../utils-classes/optionsForFetch.js';

export class SearchInput extends OptionsForFetch{
    constructor(){
        super();
        this.setSelectors();
        this.setListeners();
    }

    setSelectors(){
        this.form = document.querySelector('.form');
        this.input = this.form.querySelector('input');
        this.pageWrapper = document.querySelector('.page-wrapper');
        document.addEventListener('click', (e) => this.documentHandler(e));
    }

    setListeners(){
        this.form.addEventListener('submit',(e)=>this.submitHandler(e));
        this.input.addEventListener('input',e=>this.inputValidation(e));
        this.input.addEventListener('mouseover', (e) => this.inputHandlerFocus(e));
    }

    inputValidation(e){
        const {value} = e.target;
        if(value.length >2 && !RegExpr.checkInputReg(value)){
            MarkUpRender.inputValidationMessage();
        }

        if(this.input.value === ""){
            MarkUpRender.removeValidMessage();
            listWrapper.innerHTML="";
        }
    }

    submitHandler(e){
        e.preventDefault();

        if(RegExpr.checkInputReg(this.input.value)){
            this.query = this.input.value;
            controllers.getData(this.query,this.page);
            Storage.checkLocalStorage();
            Storage.addNewItemToStorage(this.query);
            
            return this.query;
        }else {
            MarkUpRender.inputValidationMessage();
        }

        this.input.value="";
    }

    inputHandlerFocus(e) {
        Storage.checkLocalStorage();
        const savedItems = Storage.getFromLocalStorage();
    
        if (savedItems.length > 0) {
          queryWrapper.classList.add('is-visible');
          MarkUpRender.renderQueryList(savedItems);
        }
    }

    documentHandler(e) {
        if (e.target.nodeName !== 'li' && queryWrapper.classList.contains('is-visible')) {
          queryWrapper.classList.remove('is-visible');
        }
    }

}