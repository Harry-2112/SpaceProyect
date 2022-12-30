import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyNavComponent } from './tecnology-nav.component';

describe('TecnologyNavComponent', () => {
  let component: TecnologyNavComponent;
  let fixture: ComponentFixture<TecnologyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologyNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
