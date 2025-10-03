import { LightningElement,api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class LwcCallFlowFromLWCDemo extends LightningElement {

    @api recordId;
    flowApiName = "FlowFromLWC";
    RenderFlow = false;
    @api statusvalue;

    get flowInputVariables() {
    return [
        {
            name: 'accountId',
            type: 'String',
            value: this.recordId
        },
    ];
    }

    handleClick(event) {
        console.log('Button Clicked - Id:' + event.target.id);
        console.log('Button Clicked - Content:' + event.target.textContent);
        console.log('Button Clicked - Label:' + event.target.label);

        console.log('Record Id///' + this.recordId);
        this.RenderFlow = true;
    }
    
    handleFlowStatusChange(event) {
        console.log('Flow Status:' + event.detail.status);
        this.statusvalue = event.detail.status;
/**
        if (event.detail.status?.toLowerCase()!= 'finished') {
            
            } **/
        if (event.detail.status?.toLowerCase() == 'finished') {
            this.RenderFlow  = false;
            this.dispatchEvent(new CloseActionScreenEvent());
        }
    }
}
