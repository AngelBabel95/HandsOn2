import { Component, ViewChild , OnInit, ChangeDetectorRef } from '@angular/core';
import { ESTACIONES } from '../../modelos/estaciones.data';
import { Estacion } from '../../modelos/estaciones';
import { Router } from '@angular/router';
import { DirectionsRenderer } from '@ngui/map';

@Component({
  selector: 'app-estacion-estandar',
  templateUrl: './estacion-estandar.component.html',
  styleUrls: ['./estacion-estandar.component.css']
})
export class EstacionEstandarComponent implements OnInit {
  estado: boolean; // Estado delplegar ruta
  oEstacion: Estacion;
  titulo: string;
  estadoPanel: string;

  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  direction: any = {
    origin: String,
    destination: String,
    travelMode: String
  };


  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    this.estado = false;
    this.oEstacion = this.getObject(this.router.url.slice(12));
    this.estadoPanel = 'oculto';
    // tslint:disable-next-line:max-line-length
    this.direction = {origin: 'BABEL Sistemas de Información, Calle del Príncipe de Vergara, 108, 28002 Madrid', destination: this.oEstacion.position, travelMode: 'DRIVING'};

    this.directionsRendererDirective['initialized$'].subscribe( directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });
   }

  getObject(titulo: string) {
    let ret;
    ESTACIONES.forEach( (item) => {
      if (item.url === titulo) {
        ret = item;
      }
    });
    return ret;
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }
  desplegarRuta() {
    if (this.estado) {
      this.estadoPanel = 'oculto';
    }
    if (!this.estado) {
      this.estadoPanel = '';
    }
    this.estado = !this.estado;
  }
}
