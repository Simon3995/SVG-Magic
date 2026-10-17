class SVGRect extends SVGObject {
    constructor(svgElement, x, y, width, height) {
        super(svgElement);
        this.shapeElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.shapeElement.setAttribute('x', 0);
        this.shapeElement.setAttribute('y', 0);
        this.shapeElement.setAttribute('width', width);
        this.shapeElement.setAttribute('height', height);
        this.svgElement.appendChild(this.shapeElement);
        this.move(x, y);
    }

    setColor(color) {
        this.shapeElement.setAttribute('fill', color);
    }
}