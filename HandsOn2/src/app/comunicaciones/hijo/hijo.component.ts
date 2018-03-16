import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  @Input() nombre: string;
  @Output() respuesta: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }
  btnRespuesta() {
    this.respuesta.emit(this.nombre);
  }
}
