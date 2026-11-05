import SVGObject from "./SVGObject";

export default class SVGDiv extends SVGObject {
    protected readonly foreignObjectElement: SVGForeignObjectElement;
    protected readonly divElement: HTMLElement;
    
    constructor(parent: SVGElement, content: string, x: number, y: number, width: number, height: number) {
        super(parent, x, y);

        this.foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        this.foreignObjectElement.setAttribute('width', width.toString());
        this.foreignObjectElement.setAttribute('height', height.toString());

        this.divElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
        this.divElement.innerHTML = content;
        this.foreignObjectElement.appendChild(this.divElement);

        this.groupElement.appendChild(this.foreignObjectElement);
    }
}