document.addEventListener("DOMContentLoaded", () => {
    const svgCanvas = document.getElementById("canvas");
    
    const cardOrigin = new SVGObject(svgCanvas, 0, 0);
    const cardBack = new SVGRect(cardOrigin, -30, -50, 60, 100);
    cardBack.setColor("red");
    const cardCenter = new SVGRect(cardOrigin, -10, -10, 20, 20);
    cardCenter.setColor("orange");
    cardOrigin.rotate(50);

    // add image after rotation?
    const cardImage = new SVGImage(cardOrigin, "./assets/test.jpg", -10, -35);
    cardImage.setWidth(20);
    cardImage.setHeight(20);
});