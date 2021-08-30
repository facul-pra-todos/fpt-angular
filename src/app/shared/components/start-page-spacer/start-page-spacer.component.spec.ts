import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageSpacerComponent } from './start-page-spacer.component';

describe('StartPageSpacerComponent', () => {
  let component: StartPageSpacerComponent;
  let fixture: ComponentFixture<StartPageSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPageSpacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
