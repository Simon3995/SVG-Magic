document.addEventListener("DOMContentLoaded", () => {
    const svgCanvas = document.getElementById("canvas");
    
    const mtgCard = new SVGMagicCard(svgCanvas, 0, 0);
    mtgCard.rotate(-20);
});