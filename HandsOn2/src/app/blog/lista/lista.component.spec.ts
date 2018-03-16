import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../../../servicios/blog.service';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        BlogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
