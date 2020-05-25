import { LightningElement } from 'lwc';

export default class BubbleUpContainer extends LightningElement {
    bubbleValue;
    hanleInputText(event){
        this.bubbleValue=event.detail;
    }
}