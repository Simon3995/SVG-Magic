import SVGObject from "./SVGObject";

export default class SVGMagicCard extends SVGObject {
    constructor(parent: SVGElement, x: number, y: number) {
        super(parent, x, y);
    }

    tap(): void {
        this.setRotation(90);
    }

    untap(): void {
        this.setRotation(0);
    }
}