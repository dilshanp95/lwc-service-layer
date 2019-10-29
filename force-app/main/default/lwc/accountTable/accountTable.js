import { LightningElement, track } from 'lwc';

//import data service
import AccountDataService from 'c/accountDataService';
const accountDataService = new AccountDataService();

export default class AccountTable extends LightningElement {
    hasRendered = false;
    @track accounts

    columns = [
        {label: 'Name', fieldName: 'Name'},
        {label: 'Industry', fieldName: 'Industry'}
    ];

    //handle initial load after front end is rendered
    renderedCallback() {
        //should execute only once
        if (this.hasRendered) {
            return;
        }
        this.hasRendered = true;
        
        accountDataService.getAccounts()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                //handle errors
            });
    }
}