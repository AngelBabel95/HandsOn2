import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { EntradaBlog } from '../../modelos/entradas';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  @ViewChild('form1') formUser: any; /*Variable local del formulario */
  oInputBlog: EntradaBlog;
  oValidado: Object;
  @Output() outAddBlogItem: EventEmitter<EntradaBlog>;
  constructor() {
    this.outAddBlogItem = new EventEmitter();
  }

  ngOnInit() {
    this.resetInput();
    this.oValidado = {'was-validated': true};
  }

  private resetInput() {
      this.oInputBlog = { id: undefined, nombre: '', correo: '', telefono: '', pass: '', titulo: '', descripcion: '' };
  }

  private borrarInput() {
    this.formUser.reset();
  }

  private enviarInput() {
    this.outAddBlogItem.emit(this.oInputBlog); /*Envio del objeto entrada al padre */
    this.borrarInput();
  }

}
