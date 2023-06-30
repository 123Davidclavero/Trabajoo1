import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo: string;
  imagen: string;
  constructor(){
    this.titulo= "INCUYO";
    this.imagen= "https://teamwork-online-production.s3.amazonaws.com/uploads/thumb_b79b8262-7535-49d1-a109-7d6dae0b4046.png";
    
  }
}
