public with sharing class AccountDataController {
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Industry FROM Account LIMIT 10];
    }
}
