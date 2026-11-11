import SVGObject from "./SVGObject";

export default class SVGImage extends SVGObject {
    protected readonly imgElement: SVGImageElement;
    
    constructor(parent: SVGElement, src: string, x: number, y: number, width: number, height: number) {
        super(parent, x, y);
        this.imgElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
        this.imgElement.setAttribute('href', src);
        this.imgElement.setAttribute('width', width.toString());
        this.imgElement.setAttribute('height', height.toString());
        this.imgElement.setAttribute('preserveAspectRatio', 'none');
        this.loadImage(src);
        this.groupElement.appendChild(this.imgElement);
    }

    loadImage(src: string): void {
        const img = new Image();
        img.src = src;
        // img.onload = () => {
        //     // TODO: is this width height stuff necessary?
        //     if (!this.imgElement.getAttribute('width')) {
        //         this.imgElement.setAttribute('width', img.width.toString())
        //     }
        //     if (!this.imgElement.getAttribute('height')) {
        //         this.imgElement.setAttribute('height', img.height.toString());
        //     }
        // }
    }

    setWidth(width: number): void {
        this.imgElement.setAttribute('width', width.toString());
    }

    setHeight(height: number): void {
        this.imgElement.setAttribute('height', height.toString());
    }

    setOpacity(opacity: number): void {
        this.imgElement.setAttribute('style', `opacity: ${opacity}`);
    }
}