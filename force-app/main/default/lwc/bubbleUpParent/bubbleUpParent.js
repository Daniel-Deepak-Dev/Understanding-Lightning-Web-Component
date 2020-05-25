
import { LightningElement } from 'lwc';

export default class BubbleUpParent extends LightningElement {
    bubbledValue;
    hanleInputText(event) {
        this.bubbledValue = event.detail;
    }
}