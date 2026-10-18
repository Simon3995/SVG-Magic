document.addEventListener("DOMContentLoaded", () => {
    const svgCanvas = document.getElementById("canvas");
    const parentNode = new SVGObject(svgCanvas);
    const rect = new SVGRect(parentNode.groupElement, 0, 0, 20, 20);
    parentNode.rotate(20);
    rect.rotate(-20);
});