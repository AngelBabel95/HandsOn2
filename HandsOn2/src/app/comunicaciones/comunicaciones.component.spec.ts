import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionesComponent } from './comunicaciones.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';

describe('ComunicacionesComponent', () => {
  let component: ComunicacionesComponent;
  let fixture: ComponentFixture<ComunicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionesComponent, HijoComponent, PadreComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
