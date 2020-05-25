import { LightningElement } from 'lwc';


export default class BubbleUpChild extends LightningElement {
    handleChange(event) {
        debugger;
        this.dispatchEvent(new CustomEvent(
            'inputtext',
            {
                detail: event.target.value,
                bubbles: true,
                composed: false
            }
        ));
    }
}