import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ListaComponent } from './lista/lista.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogService } from '../../servicios/blog.service';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule,
    HttpClientModule
  ],
  declarations: [
    BlogComponent,
    ListaComponent,
    CrearComponent,
    EditarComponent
  ],
  exports: [BlogComponent],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
