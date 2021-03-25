import {Controllers} from './controllers.js';
import { MarkUpRender } from '../utils-classes/markUpRender.js';
import {Storage} from '../utils-classes/storage.js';
import {queryWrapper} from '../utils-classes/constants.js';
import {RegExpr} from '../utils-classes/regExp.js';

export class SearchInput{
    constructor(){
        this.setSelectors();
        this.setListeners();
    }

    setSelectors(){
        this.form = document.querySelector('.form');
        this.input = this.form.querySelector('input');
    }

    setListeners(){
        this.form.addEventListener('submit',(e)=>this.submitHandler(e));
        this.input.addEventListener('focus',e=>this.inputHandlerFocus(e));
        this.input.addEventListener('input',e=>this.inputValidation(e))
        this.input.addEventListener('blur',e=>this.inputHandlerBlur(e));
    }

    inputValidation(e){
        const {value} = e.target;
        if(value.length >2 && !RegExpr.checkInputReg(value)){
            MarkUpRender.inputValidationMessage();
        }

        if(this.input.value === ""){
            MarkUpRender.removeValidMessage();
        }
    }

    submitHandler(e){
        e.preventDefault();
        const controllers = new Controllers();

        if(RegExpr.checkInputReg(this.input.value)){
            
            controllers.getData(this.input.value);
            Storage.checkLocalStorage();
            Storage.addNewItemToStorage(this.input.value);
            this.input.value="";
        }else {
            MarkUpRender.inputValidationMessage();
        }
    }

    inputHandlerFocus(e){
        Storage.checkLocalStorage();
        const savedItems = Storage.getFromLocalStorage();
        
        if(savedItems.length>0){
           queryWrapper.classList.add('is-visible');
           MarkUpRender.renderQueryList(savedItems);
        }
    }

    inputHandlerBlur(e){
        if(queryWrapper.classList.contains('is-visible')){
            queryWrapper.classList.remove('is-visible');
        }
    }
}