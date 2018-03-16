import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../../servicios/blog.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() oEntrada: any;
  @Input() admin: string;
  @Output() outDeleteItem: EventEmitter<string>;
  @Output() outEditItem: EventEmitter<string>;
  shown: boolean;
  content: string;
  arrowClass: string;
  title: string;
  author: string;
  pass: string;
  contraClass: string;
  buttonsClass: string;
  buttonFailClass: string;

  constructor() {
    this.outDeleteItem = new EventEmitter();
    this.outEditItem = new EventEmitter();
    this.contraClass = 'oculto';
    this.buttonsClass = '';
  }

  ngOnInit() {
    this.shown = false;
    this.content = '';
    this.arrowClass = 'fa fa-sort-down';
    this.title = this.oEntrada.titulo;
    this.author = this.oEntrada.nombre;
  }
  setContent() {
    this.shown = !this.shown;
    (this.shown) ? this.content = this.oEntrada.descripcion : this.content = '';
    (this.shown) ? this.arrowClass = 'fa fa-sort-up' : this.arrowClass = 'fa fa-sort-down';

  }
  fadeContent() {
  }
  deleteEntrada() {
    this.outDeleteItem.emit(this.oEntrada); /*Envio del objeto entrada al padre */
  }
  editEntrada() {
    if (this.oEntrada.pass === this.pass) {
      console.log('entra');
      this.outEditItem.emit(this.oEntrada); /*Envio del objeto entrada al padre */
      return;
    }
    if (this.contraClass === 'oculto') {
      this.contraClass = '';
      this.buttonsClass = 'oculto';
    } else {
      this.contraClass = 'oculto';
      this.buttonsClass = '';
    }

  }
}
