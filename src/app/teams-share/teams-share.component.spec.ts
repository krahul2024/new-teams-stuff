import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsShareComponent } from './teams-share.component';

describe('TeamsShareComponent', () => {
  let component: TeamsShareComponent;
  let fixture: ComponentFixture<TeamsShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsShareComponent]
    });
    fixture = TestBed.createComponent(TeamsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
