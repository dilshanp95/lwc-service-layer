/**
 * This component can be used to make apex method calls from LWCs
 */

export default class ApexServiceHandler {
    //method receives an Apex method reference, and returns the response as a promise
    callAction = (action) => {
        return new Promise(function(resolve, reject) {
            action()
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                    //handle error notification
                });
        });
    }
}