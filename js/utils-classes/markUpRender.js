import {listWrapper,queryList,validationMessage} from './constants.js';

export class MarkUpRender{

    static renderListItem(arr){
        const markUp = arr.map(el=>{
            return `<li class="list-item">
            <div class="item-wrapper">
                <img src=${el.image_url} width="100" height="280"/>
                <div class="text-wrapper">
                <h2>${el.name}</h2>
                <p>${el.abv}</p>
                <p>${el.description}</p>
                </div>
            </div>
            <li>`
        });

        return markUp.join(" ");
    }

    static renderList(){
        listWrapper.innerHTML="";
        const list = document.createElement('ul');
        list.classList.add('list');
        listWrapper.append(list);

        return list
    }

    static renderText(notifText){
        listWrapper.innerHTML="";
        const text = document.createElement('p');
        text.classList.add('notification');
        text.textContent=`${notifText}. Please,try another search query`;
        listWrapper.append(text);
    }

    static renderError(text){
        listWrapper.innerHTML="";
        const errorText = document.createElement('p');
        errorText.classList.add('error-message');
        errorText.textContent=`${text}. Please,try again`;
        listWrapper.append(errorText);
    } 

    static renderQueryList(arr){
       const queryListItem =  arr.map(item=>{
            return `<li class="query-item">${item}</li>`
        });

        queryList.innerHTML=queryListItem.join(" ");
    }

    static inputValidationMessage(){
        validationMessage.classList.add('is-visible');
    }

    static removeValidMessage(){
        validationMessage.classList.remove('is-visible');
    }

    
}