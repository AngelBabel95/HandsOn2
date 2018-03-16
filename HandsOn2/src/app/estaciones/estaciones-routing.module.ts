import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstacionesComponent } from './estaciones.component';
import { EstacionEstandarComponent } from './estacion-estandar/estacion-estandar.component';

const routes: Routes = [
  {path: 'valdesqui',  component: EstacionEstandarComponent},
  {path: 'la-pinilla',   component: EstacionEstandarComponent},
  {path: 'sierra-bejar',  component: EstacionEstandarComponent},
  {path: 'puerto-navacerrada',  component: EstacionEstandarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'puerto-navacerrada' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstacionesRoutingModule { }
