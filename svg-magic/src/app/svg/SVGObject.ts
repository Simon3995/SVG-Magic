import { Transform } from "../util/types";

export default class SVGObject {
    protected readonly parent: SVGElement; // any svg element
    protected readonly groupElement: SVGGElement; // svg <g> element
    protected readonly transform: Transform;
    
    constructor(parent: SVGElement, x = 0, y = 0) {
        this.parent = parent;
        this.transform = { translate: { x:x, y:y }, rotate: 0 };
        this.groupElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.parent.appendChild(this.groupElement);
        this.applyTransform();
    }

    move(x: number, y: number) {
        this.transform.translate.x += x;
        this.transform.translate.y += y;
        this.applyTransform();
    }

    setPosition(x: number, y: number) {
        this.transform.translate.x = x;
        this.transform.translate.y = y;
        this.applyTransform();
    }

    rotate(angle: number) {
        this.transform.rotate += angle;
        this.transform.rotate %= 360;
        this.applyTransform();
    }

    setRotation(angle: number) {
        this.transform.rotate = angle;
        this.transform.rotate %= 360;
        this.applyTransform();
    }

    delete() {
        if (this.groupElement && this.groupElement.parentNode) {
            this.groupElement.parentNode.removeChild(this.groupElement);
        }
    }

    applyTransform() {
        const { x, y } = this.transform.translate;
        const angle = this.transform.rotate;
        const transformAttr = `translate(${x}, ${y}) rotate(${angle})`;
        this.groupElement.setAttribute('transform', transformAttr);
    }
}