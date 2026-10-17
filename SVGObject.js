class SVGObject {
    constructor(svgElement) {
        this.svgElement = svgElement;
        this.shapeElement = null;
        this.transform = { translate: { x:0, y:0 }, rotate: 0 };
    }

    move(x, y) {
        if (this.shapeElement) {
            this.transform.translate.x += x;
            this.transform.translate.y += y;
            this.applyTransform();
        }
    }

    rotate(angle) {
        if (this.shapeElement) {
            this.transform.rotate += angle;
            this.transform.rotate %= 360;
            this.applyTransform();
        }
    }

    delete() {
        if (this.shapeElement && this.shapeElement.parentNode) {
            this.shapeElement.parentNode.removeChild(this.shapeElement);
        }
    }

    applyTransform() {
        const { x, y } = this.transform.translate;
        const angle = this.transform.rotate;
        const transformAttr = `translate(${x}, ${y}) rotate(${angle})`;
        this.shapeElement.setAttribute('transform', transformAttr);
    }
}