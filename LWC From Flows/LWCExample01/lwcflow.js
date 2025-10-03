import { LightningElement, api } from 'lwc';

export default class Lwcflow extends LightningElement {
    @api name;
    @api phone;
    @api email;
    
    nameChangeHandler(event){
        this.name = event.target.value;
    }
    phoneChangeHandler(event){
        this.phone = event.target.value;
    }           
    emailChangeHandler(event){
        this.email = event.target.value;
    }   







}
