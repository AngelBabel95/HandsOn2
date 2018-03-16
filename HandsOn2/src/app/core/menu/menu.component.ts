import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  estado: boolean; // False si el menu responsive esta oculto
  shown: boolean; // False si el submenu esta oculto
  claseUl: string;
  claseBoton: string;
  arrowClass: string;
  claseSubmenu: string;

  constructor() {
    this.arrowClass = 'fa fa-sort-down';
    this.shown = false;
  }

  ngOnInit() {
    this.estado = false;
    this.claseUl = ' oculto';
    this.claseSubmenu = 'oculto2';
    this.claseBoton = '';
  }
  botonMenu() {
    this.estado = !this.estado;
    if (this.estado) {
      this.claseUl = ' ' ;
      this.claseBoton = ' oculto';
    }
    if (!this.estado) {
      this.claseUl = ' oculto' ;
      this.claseBoton = ' ';
    }
  }
  botonSubMenu() {
    this.shown = !this.shown;
    (this.shown) ? this.claseSubmenu = '' : this.claseSubmenu = 'oculto2';
    (this.shown) ? this.arrowClass = 'fa fa-sort-up' : this.arrowClass = 'fa fa-sort-down';

  }
}
