import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AutorService } from '../../servicios/autor.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent, HeaderComponent, FooterComponent, AsideComponent],
  exports: [MenuComponent, FooterComponent, HeaderComponent, AsideComponent],
  providers: [ AutorService ]
})
export class CoreModule { }
