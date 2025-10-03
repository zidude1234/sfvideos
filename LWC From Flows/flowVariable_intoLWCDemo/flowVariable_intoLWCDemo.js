import { LightningElement } from 'lwc';

export default class FlowVariable_intoLWCDemo extends LightningElement {

    firstName;
    lastName;
    isShowFlow = false;
    flowVariables = [];
    showFlowHandler() {
        this.firstName = this.template.querySelector('lightning-input[data-name="firstName"]').value;
        this.lastName = this.template.querySelector('lightning-input[data-name="lastName"]').value;
        this.flowVariables = [
            {
                name: "firstname",
                type: "String",
                value: this.firstName
            },
            {
                name: "lastname",
                type: "String",
                value: this.lastName
            }
        ];
        this.isShowFlow = true;
    }

    handleFlowStatusChange(event) {
        if (event.detail.status?.toLowerCase() == 'finished') {
            this.isShowFlow = false;
            this.template.querySelector('lightning-input[data-name="firstName"]').value = '';
            this.template.querySelector('lightning-input[data-name="lastName"]').value = '';
        }
    }
}












/**    
    firstname;
    lastname;
    isShowFlow = false;
    flowVariables = []; //passed as an array

    showFlowHandler(){
        console.log('First name: '+ this.template.querySelector('lightning-input[data-name="firstName"]').value);
        console.log('Lasst name: '+ this.template.querySelector('lightning-input[data-name="lastName"]').value);

        this.firstname = this.template.querySelector('lightning-input[data-name="firstName"]').value;
//      this.firstname = this.template.querySelector('[data-name="firstName"]').value;
//        this.lastname = this.template.querySelector('[data-name="lastName"]').value;
        this.lastName = this.template.querySelector('lightning-input[data-name="lastName"]').value;

        this.isShowFlow = true;
        console.log('First name Variable: '+ this.firstname);
        console.log('Last name variable: '+ this.lastName);

        this.flowVariables = [
            {
                name: 'firstname', 
                type: 'String', 
                value: this.firstname
            },
            {
                name: 'lastname', 
                type: 'String', 
                value: this.lastname
            }
        ]
    }
    //To ensure flow button disappears the flow
    //we need to subscribe to the Flow Status Event
    handleFlowStatusHandler(event){
        console.log('Flow Status Event: '+event.details.status);
        console.log('Flow Status Event:');

        if(event.detail.status=='FINISHED'){
            this.isShowFlow = false;
            this.template.querySelector('lightning-input[data-name="firstName"]').value = '';
            this.template.querySelector('lightning-input[data-name="lastName"]').value = '';
            
        }



    }

}
**/