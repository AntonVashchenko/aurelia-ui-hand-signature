import { Router } from 'aurelia-router';
import { autoinject, bindable } from 'aurelia-framework';


@autoinject
export class Page1 {
    public title: string;
    private myHandSignature: HTMLCanvasElement;
    constructor(public router: Router) {
        // todo
    }

    public canActivate(a, b, c) {
        this.title = b.title;
    }

}





