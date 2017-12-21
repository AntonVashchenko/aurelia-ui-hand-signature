
export class HandSignature { }
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

function CreateSignTemplate(width: number, height: number) {

    context.font = '50px Verdana';
    context.fillText('X', 10, height - 30);
    context.beginPath();
    context.moveTo(50, height - 30);
    context.lineTo(width - 20, height - 30);
    context.stroke();
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('signCanvas');
    context = canvas.getContext('2d');
    let w = canvas.width;
    let h = canvas.height;
    let mouse = { x: 0, y: 0 };
    let draw = false;

    CreateSignTemplate(w, h);

    canvas.addEventListener('mousedown', function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
    });
    canvas.addEventListener('mousemove', function (e) {
        if (draw === true) {
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
        }
        canvas.addEventListener('mouseup', function (e) {
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
            draw = false;
        });
    });
    let download = document.getElementById('btn-download');
    download.addEventListener('click', function (e) {
        let dataURL = canvas.toDataURL('image/png');
        download.href = dataURL;
    });
    let clear = document.getElementById('btn-clear');
    clear.addEventListener('click', function (e) {
        context.clearRect(0, 0, w, h);
        CreateSignTemplate(w, h);
    });

};




