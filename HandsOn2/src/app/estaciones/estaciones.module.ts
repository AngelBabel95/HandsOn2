import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstacionesRoutingModule } from './estaciones-routing.module';
import { EstacionesComponent } from './estaciones.component';
import { EstacionEstandarComponent } from './estacion-estandar/estacion-estandar.component';
import { AsideComponent } from '../core/aside/aside.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    EstacionesRoutingModule, CoreModule
  ],
  declarations: [EstacionesComponent, EstacionEstandarComponent],
  exports: [EstacionesComponent]
})
export class EstacionesModule { }
