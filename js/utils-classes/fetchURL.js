export class FetchURL{
    static async fetchURL (query,page){
        try{
            const data = await fetch(
                `https://api.punkapi.com/v2/beers?page=${page}&per_page=4&beer_name=${query}`
              )
            return data;

        }catch(e){
            console.log(e)
        }
    }
}