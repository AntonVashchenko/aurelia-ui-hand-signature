import { customAttribute, customElement, inject, autoinject, child, bindable } from 'aurelia-framework';

@customElement('hand-signature')
@inject(Element)
export class HandSignature { 
    @bindable canvasWidth = '';
    @bindable canvasHeight = '';
    @bindable action;
    private element: any;
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private mySignCanvas: HTMLCanvasElement;
    private mouseX: number;
    private mouseY: number;
    private draw=false;
    private imageHrefContainer: HTMLInputElement;
    constructor(element: Element) {
        this.element = element;
    }
    attached(){
        this.canvas = <HTMLCanvasElement>this.mySignCanvas;
        this.context = this.canvas.getContext('2d');
        let w = this.canvas.width;
        let h = this.canvas.height;
        this.mouseX = 0;
        this.mouseY = 0;
        this.CreateSignTemplate(w, h);
    }
    private CreateSignTemplate(width: number, height: number) {

        this.context.font = '50px Verdana';
        this.context.fillText('X', 10, height - 30);
        this.context.beginPath();
        this.context.moveTo(50, height - 30);
        this.context.lineTo(width - 20, height - 30);
        this.context.stroke();
    }
    private onMouseDown(e:any){   
         
        this.mouseX = e.pageX - this.element.offsetLeft;
        this.mouseY = e.pageY - this.element.offsetTop;
        this.draw = true;
        this.context.beginPath();
        this.context.moveTo(this.mouseX, this.mouseY);
    }
    private onMouseMove(e:any){
        if ( this.draw === true) {
            this.mouseX = e.pageX - this.element.offsetLeft;
            this.mouseY = e.pageY - this.element.offsetTop;
            this.context.lineTo(this.mouseX, this.mouseY);
            this.context.stroke();
        }
    }
    private onMouseUp(e:any){
         this.mouseX = e.pageX - this.element.offsetLeft;
         this.mouseY = e.pageY - this.element.offsetTop;
         this.context.lineTo(this.mouseX, this.mouseY);
         this.context.stroke();
         this.draw = false;
         this.imageHrefContainer.value=this.canvas.toDataURL('image/png');
    }
    private Clear(e:any){
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
         this.CreateSignTemplate(this.canvas.width, this.canvas.height);
    }

}