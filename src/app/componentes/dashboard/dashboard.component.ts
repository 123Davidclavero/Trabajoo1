import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  imagen: string;
  informacion: string;
  textEvent: string;

  constructor(){
    this.imagen="https://blog.e-saurio.com/content/images/2023/02/the-seo-guide-to-angular.png";
    this.informacion = "Angular es un framework de ingeniería de software de código abierto mantenido por Google, que sirve para desarrollar aplicaciones web de estilo Single Page Application (SPA) y Progressive Web App (PWA). Sirve tanto para versiones móviles como de escritorio. Angular tiene un nivel de complejidad de medio a elevado y ofrece soluciones robustas, escalables y optimizadas para lograr un estilo de codificación homogéneo y de gran modularidad. Su desarrollo se realiza por medio de TypeScript o JavaScript. En este último se ofrecen diversas herramientas adicionales al lenguaje como tipado estático o decoradores. Su nombre «Angular» proviene del concepto de paréntesis angulares (< >) que se utilizan en HTML.";
    this.textEvent = " " 
  }
  cambiarTexto(): void{
    this.textEvent = "David Clavero, Carolina Guiñazu"
  }
}
