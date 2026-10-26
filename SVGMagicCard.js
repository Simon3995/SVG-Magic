// work in progress

class SVGMagicCard extends SVGObject {
    constructor(svgElement, x = 0, y = 0) {
        super(svgElement, x, y);

        // reference image
        // this.background = new SVGImage(this, "./assets/dina_soul_steeper.jpg", -31.5, -44, 63, 88);

        // card background
        this.cardBack = new SVGRect(this, -31.5, -44, 63, 88);
        this.cardBack.setColor("#00ff0040");
        this.cardBack.setCornerRadius(3);

        // title
        this.title = new SVGText(this, "Dina, Soul Steeper", -26, -36, 3.1, 50);

        // type
        this.type = new SVGText(this, "Legendary Creature – Dryad Druid", -26, 9, 2.6, 50);

        // description
        let box = [-26, 12, 52, 28];
        // this.descriptionRect = new SVGRect(this, ...box);
        // this.descriptionRect.setColor("#ff000040"); // rect for debug
        this.description = new SVGDiv(this, `
            <p>Whenever you gain life, each opponent loses 1 life.</p>
            <p>${sym('1')}, Sacrifice another creature: Dina, Soul Steeper gets +X/+0 until end of turn, where X is the sacrificed creature's power.</p>
            <p class="flavor">Her concoctions corroded metal and fortified organic tissue. They would be studied for generations.</p>
        `, ...box);

        // power/toughness
        this.stats = new SVGText(this, "1/3", 21, 38, 3.2);
    }
}