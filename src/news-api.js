
const API_KEY = '84d30b76ccff4726a429a29aa315a835';
const BASE_URL = 'http://newsapi.org/v2/';

export default class NewsApi  {
    
    constructor (){
        this.searchQuery = '',
        this.page = 1
    }    
    
    
    fetchArticles(){
        return fetch(`${BASE_URL}everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}&apiKey=${API_KEY}`)
        .then(response=>response.json())
        .then(data=>data.articles)
        .then(articles => articles)
    }
    
    increasePage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1
    }
}