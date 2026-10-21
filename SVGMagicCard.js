// work in progress

class SVGMagicCard extends SVGObject {
    constructor(svgElement, x = 0, y = 0) {
        super(svgElement, x, y);

        //this.background = new SVGImage(this, "./assets/jace_beleren.jpg", -31.5, -44, 63, 88);

        this.cardBack = new SVGRect(this, -31.5, -44, 63, 88);
        this.cardBack.setColor("#00ff0040");
        this.cardBack.setCornerRadius(3);

        this.title = new SVGText(this, "Jace Beleren", -26, -37, 3.5, 50);
    }
}