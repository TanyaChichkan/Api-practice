export class OptionsForFetch{
    constructor(){
        (this.page = 1);
        (this.query="");
        this.input = document.querySelector('input');
        this.list = document.querySelector('.list');
    }
}