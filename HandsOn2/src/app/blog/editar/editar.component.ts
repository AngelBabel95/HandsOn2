import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EntradaBlog } from '../../modelos/entradas';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('form1') formUser: any; /*Variable local del formulario */
  @Input() oEntrada: any;
  @Output() outEditItem: EventEmitter<string>;

  tituloEdit: string;
  descripcionEdit: string;

  constructor() {
  console.log(this.oEntrada);
    this.outEditItem = new EventEmitter();
   }

  ngOnInit() {
  }

  private borrarInput() {
    this.formUser.reset();
  }


  private editarInput() {
    this.outEditItem.emit(this.oEntrada); /*Envio del objeto modificado al padre */
    this.borrarInput();
  }

}
