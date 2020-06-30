import axios from 'axios';
import { key, proxy } from '../config';
import { items } from '../views/base';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    getResults(query) {
        var result = [];
        items.forEach(function(item){
            if(item.title.toUpperCase().includes(query.toUpperCase())){
                result.push(item);
            }
        });
        this.result = result;
    }
}

