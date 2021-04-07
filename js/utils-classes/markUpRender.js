import {listWrapper,queryList,validationMessage,alertWrapper,loader,loadMore,text} from './constants.js';

export class MarkUpRender{

    static renderListItem(arr){
        const markUp = arr.map(el=>{
            return `<li class="list-item">
            <div class="item-wrapper">
                <img src=${el.image_url} width="100" height="280"/>
                <div class="text-wrapper">
                <h2>${el.name}</h2>
                <p>Alcohol:${el.abv}%</p>
                <p>${el.description}</p>
                </div>
            </div>
            <li>`
        });

        return markUp.join(" ");
    }

    // static renderList(){
    //         const list = document.createElement('ul');
    //         list.classList.add('list');
    //         listWrapper.append(list);
        

    //     return list;
    // }

    static renderText(textMessage){
        text.classList.add('is-visible');
        text.textContent = `${textMessage}. Please,try again`;
      
    }

    static hideText(){
        text.classList.remove('is-visible');
    }

    // static renderError(text){
    //     const errorText = document.createElement('p');
    //     errorText.classList.add('error-message');
    //     errorText.textContent=`${text}. Please,try again`;
    //     alertWrapper.append(errorText);
    // } 

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

    static showLoader(){
       loader.classList.add('is-visible');
    }

    static hideLoader(){
        loader.classList.remove('is-visible');

    }

    static renderLoadMoreButton(){
        loadMore.classList.add('is-visible');
    }

    static hideLoadMoreButton(){
        loadMore.classList.remove('is-visible');
    }
    
}