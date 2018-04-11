import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BlogModule } from './blog/blog.module';
import { EstacionesModule } from './estaciones/estaciones.module';
import { AutorService } from '../servicios/autor.service';

import { NguiMapModule} from '@ngui/map';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    AboutModule,
    BlogModule,
    EstacionesModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCxAMWBdz3ynF-KGDdwK-GmhKjFGHUJf4o'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
