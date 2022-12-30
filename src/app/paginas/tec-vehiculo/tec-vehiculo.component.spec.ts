import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecVehiculoComponent } from './tec-vehiculo.component';

describe('TecVehiculoComponent', () => {
  let component: TecVehiculoComponent;
  let fixture: ComponentFixture<TecVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
