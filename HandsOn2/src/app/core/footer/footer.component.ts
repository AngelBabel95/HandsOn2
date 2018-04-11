import { Component, OnInit } from '@angular/core';
import { Autor } from '../../modelos/autor';
import { AutorService } from '../../../servicios/autor.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private oAutor: Autor;
  private nombreAutor: string;

  constructor(public autorservice: AutorService) {
    this.oAutor = { id: undefined, nombre: '', apellidos: '', telefono: '', direccion: ''};
    this.nombreAutor = '';
    this.autorservice.getAutor().then(
      response => {
        console.log(response);
        this.oAutor = response;
        this.nombreAutor = this.oAutor.nombre;
        this.nombreAutor = this.nombreAutor + ' ' +  this.oAutor.apellidos;
      }
    );
  }

  ngOnInit() {
  }

}
