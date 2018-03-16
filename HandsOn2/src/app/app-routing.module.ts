import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about/about.component';
import { EstacionesComponent } from './estaciones/estaciones.component';

const routes: Routes = [

  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'estaciones', loadChildren: './estaciones/estaciones.module#EstacionesModule' },
  { path: 'comunicaciones', loadChildren: './comunicaciones/comunicaciones.module#ComunicacionesModule'},
  /* { path: 'estaciones', component: EstacionesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent }, */
  { path: '', pathMatch: 'full', redirectTo: 'estaciones/puerto-navacerrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
