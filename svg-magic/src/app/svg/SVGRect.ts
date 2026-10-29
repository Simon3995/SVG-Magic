import { SVGObject } from './SVGObject';

export class SVGRect extends SVGObject {
    protected readonly shapeElement: SVGRectElement;
    
    constructor(parent: SVGElement, x: number, y: number, width: number, height: number) {
        super(parent, x, y);
        this.shapeElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.shapeElement.setAttribute('width', width.toString());
        this.shapeElement.setAttribute('height', height.toString());
        this.groupElement.appendChild(this.shapeElement);
    }

    setColor(color: string) {
        this.shapeElement.setAttribute('fill', color);
    }

    setCornerRadius(radius: number) {
        this.shapeElement.setAttribute('rx', radius.toString());
        this.shapeElement.setAttribute('ry', radius.toString());
    }
}