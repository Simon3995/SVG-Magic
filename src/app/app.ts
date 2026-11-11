import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SVGMagicCreatureCard from './svg/SVGMagicCreatureCard';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // sorry nothing
}

document.addEventListener("DOMContentLoaded", () => {
    const svgCanvas = document.querySelector<SVGElement>("#canvas")!;    
    const mtgCard = new SVGMagicCreatureCard(svgCanvas, 0, 0); // error because svgCanvas must be of type SVGElement
    mtgCard.rotate(20);
});