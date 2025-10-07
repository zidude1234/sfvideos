import { LightningElement } from 'lwc';
import createChildRecord from '@salesforce/apex/LwcConnectedCallbackDemo.createChildRecord';

export default class LwcConnectedCalbackDemo extends LightningElement {
    error;
    result;
    connectedCallback(){
        console.log('Connected Callback///');
        createChildRecord()
        .then ((result)=>{
            console.log('Result///'+result);
            // }
            this.error = undefined;
        })
        .catch((error)=>{
            this.error = error;
            this.result = undefined;
            console.log('Error///'+error);

        });
    }

}