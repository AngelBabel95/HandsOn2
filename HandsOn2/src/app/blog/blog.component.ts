import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../../servicios/blog.service';
import { EntradaBlog } from '../modelos/entradas';
import { Router } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  admin: string;
  aEntradas: Array<EntradaBlog>;
  oEditar: EntradaBlog;
  sContacto: string;
  sFiltrar: string; /*Valor del search*/
  claseError: string;
  i: number;
  editClass: string;
  formClass: string;
  /* @ViewChild('li') input: ListaComponent; */
  constructor(public blogservice: BlogService, private router: Router) { }

  ngOnInit() {
    this.oEditar = { id: undefined, nombre: '', correo: '', telefono: '', pass: '', titulo: '', descripcion: '' };
    this.sFiltrar = '';
    this.aEntradas = [];
    this.claseError = 'oculto';
    this.editClass = 'oculto';
    this.blogservice.getEntradas().then(
      response => {
        this.aEntradas = response;
      }
    );
    (this.router.url.slice(6) === 'admin') ? this.admin = 'admin' : this.admin = 'no-admin';
}
  // respuesta a los eventos en el componente altas
  addEntrada(oInputBlog) {


    this.blogservice.setEntrada(oInputBlog)
      .then(
        () => {
          this.blogservice.getEntradas()
          .then(response => this.aEntradas = response);
        });
  }

  deleteEntrada(oInputBlog) {
    this.blogservice.deleteEntrada(oInputBlog)
      .then(
        () => {
          this.blogservice.getEntradas()
          .then(response => this.aEntradas = response);
        });
  }
  editEntrada(oInputBlog: EntradaBlog) {
   this.editEntradaAux(oInputBlog);
   this.blogservice.editEntrada(oInputBlog)
      .then(
        () => {
          this.blogservice.getEntradas()
          .then(response => this.aEntradas = response);
        });
  }
  editEntradaAux(oInputBlog: EntradaBlog) {
    this.oEditar = oInputBlog;
    if (this.editClass === 'oculto') {
      this.editClass = '';
      this.formClass = 'oculto';
    } else {
      this.editClass = 'oculto';
      this.formClass = '';
    }

  }
  isEmpty () {

    if (this.sFiltrar.length) {
      this.sinResultados();
      return false;
    }
  }

  sinResultados() {

    if (!document.getElementById('entradas')) {
      this.claseError = '';
    } else {
      this.claseError = 'oculto';
    }
  }
}

