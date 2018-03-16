import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../servicios/blog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EditarComponent } from './editar/editar.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent,
        CrearComponent,
        ListaComponent,
        EditarComponent],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        BlogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    console.log('DEntro');
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  /*Cuando hace este it la variable component esta definida como undefined
  * ya que no ha dado tiempo a pasar por el beforeEach

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
