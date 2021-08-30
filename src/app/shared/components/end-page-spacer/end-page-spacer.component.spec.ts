import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPageSpacerComponent } from './end-page-spacer.component';

describe('EndPageSpacerComponent', () => {
  let component: EndPageSpacerComponent;
  let fixture: ComponentFixture<EndPageSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndPageSpacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndPageSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
