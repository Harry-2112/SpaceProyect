import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecCapsulaComponent } from './tec-capsula.component';

describe('TecCapsulaComponent', () => {
  let component: TecCapsulaComponent;
  let fixture: ComponentFixture<TecCapsulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecCapsulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecCapsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
