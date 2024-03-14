import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsChatComponent } from './teams-chat.component';

describe('TeamsChatComponent', () => {
  let component: TeamsChatComponent;
  let fixture: ComponentFixture<TeamsChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsChatComponent]
    });
    fixture = TestBed.createComponent(TeamsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
