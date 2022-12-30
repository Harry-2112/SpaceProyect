import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewNavigationComponent } from './crew-navigation.component';

describe('CrewNavigationComponent', () => {
  let component: CrewNavigationComponent;
  let fixture: ComponentFixture<CrewNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
