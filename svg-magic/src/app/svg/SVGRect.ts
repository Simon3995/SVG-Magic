import SVGObject from './SVGObject';

export default class SVGRect extends SVGObject {
    protected readonly rectElement: SVGRectElement;
    
    constructor(parent: SVGElement, x: number, y: number, width: number, height: number) {
        super(parent, x, y);
        this.rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.rectElement.setAttribute('width', width.toString());
        this.rectElement.setAttribute('height', height.toString());
        this.groupElement.appendChild(this.rectElement);
    }

    setColor(color: string) {
        this.rectElement.setAttribute('fill', color);
    }

    setCornerRadius(radius: number) {
        this.rectElement.setAttribute('rx', radius.toString());
        this.rectElement.setAttribute('ry', radius.toString());
    }
}