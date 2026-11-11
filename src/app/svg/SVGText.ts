import SVGObject from "./SVGObject";

export default class SVGText extends SVGObject {
    protected readonly textElement: SVGTextElement;
    
    constructor(parent: SVGElement, text: string, x: number, y: number, fontSize: number, maxWidth: number = Infinity) {
        super(parent, x, y);
        this.textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        this.textElement.setAttribute('font-size', fontSize.toString());
        this.textElement.textContent = text;
        this.groupElement.appendChild(this.textElement);

        // ensure maximum text width
        const measured = this.textElement.getComputedTextLength();
        if (measured > maxWidth) {
            this.textElement.setAttribute('textLength', maxWidth.toString());
            this.textElement.setAttribute('lengthAdjust', 'spacingAndGlyphs');
        }
    }

    setColor(color: string): void {
        this.textElement.setAttribute('fill', color);
    }
}