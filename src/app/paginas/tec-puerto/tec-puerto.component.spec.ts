import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecPuertoComponent } from './tec-puerto.component';

describe('TecPuertoComponent', () => {
  let component: TecPuertoComponent;
  let fixture: ComponentFixture<TecPuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecPuertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecPuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
