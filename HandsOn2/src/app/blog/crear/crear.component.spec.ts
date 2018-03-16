import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComponent } from './crear.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../../../servicios/blog.service';

describe('CrearComponent', () => {
  let component: CrearComponent;
  let fixture: ComponentFixture<CrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearComponent ],
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
    fixture = TestBed.createComponent(CrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
