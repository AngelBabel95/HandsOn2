import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionesRoutingModule } from './comunicaciones-routing.module';
import { ComunicacionesComponent } from './comunicaciones.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComunicacionesRoutingModule,
    FormsModule
  ],
  declarations: [ComunicacionesComponent, PadreComponent, HijoComponent],
  exports: [
    ComunicacionesComponent
  ]
})
export class ComunicacionesModule { }
