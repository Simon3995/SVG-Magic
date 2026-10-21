// work in progress

class SVGMagicCard extends SVGObject {
    constructor(svgElement, x = 0, y = 0) {
        super(svgElement, x, y);

        //this.background = new SVGImage(this, "./assets/jace_beleren.jpg", -31.5, -44, 63, 88);

        this.cardBack = new SVGRect(this, -31.5, -44, 63, 88);
        this.cardBack.setColor("#00ff0040");
        this.cardBack.setCornerRadius(3);

        this.title = new SVGText(this, "Jace Beleren", -26, -37, 3.5, 50);

        this.descriptionRect = new SVGRect(this, -26, 0, 52, 40);
        this.descriptionRect.setColor("#ff000040");
        this.description = new SVGTextBox(this, "This is some text to test the SVGTextBox class and I'm gonna write a couple more words to see if the line breaking is working correctly", -26, 0, 52, 40, 3);
    }
}