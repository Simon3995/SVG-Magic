class SVGMagicCard extends SVGObject {
    constructor(svgElement, x = 0, y = 0) {
        super(svgElement, x, y);

        this.background = new SVGRect(this, -30, -50, 60, 100);
        this.image = new SVGImage(this, "./assets/test.jpg", -25, -45, 50, 35);
    }
}