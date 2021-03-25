export class Storage{
    static setToLocalStorage(arr){
        localStorage.setItem('queries', JSON.stringify(arr));
    }

    static getFromLocalStorage(){
        const savedQueries = localStorage.getItem('queries');
        const parsedQueries = JSON.parse(savedQueries);
        return parsedQueries;
    }

    static checkLocalStorage(){
        const arr = this.getFromLocalStorage();
        if(arr === null){
            Storage.setToLocalStorage([]);
        }
    }

    static addNewItemToStorage(item){
        let updatedArr;

       this.getFromLocalStorage().includes(item) ? 
            updatedArr = [...this.getFromLocalStorage()] :
            updatedArr = [...this.getFromLocalStorage(),item];

        Storage.setToLocalStorage(updatedArr);
    }
}