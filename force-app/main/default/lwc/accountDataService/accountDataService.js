import getAccounts from '@salesforce/apex/AccountDataController.getAccounts';

//import apex service handler
import ApexService from 'c/apexServiceHandler';
const apexCallHandler = new ApexService();

export default class AccountDataService {
    getAccounts() {
        return apexCallHandler.callAction(getAccounts);
    }
}