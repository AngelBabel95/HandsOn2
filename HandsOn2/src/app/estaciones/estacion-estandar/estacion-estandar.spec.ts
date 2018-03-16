import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionEstandarComponent } from './estacion-estandar.component';

describe('LaPinillaComponent', () => {
  let component: EstacionEstandarComponent;
  let fixture: ComponentFixture<EstacionEstandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionEstandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
