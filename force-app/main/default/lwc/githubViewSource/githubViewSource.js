import { LightningElement, api } from 'lwc';

export default class GithubViewSource extends LightningElement {
    baseURL = 'https://github.com/Daniel-Deepak-Dev/Understanding-Lightning-Web-Component/tree/master/force-app/main/default/';

    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}