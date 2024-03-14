import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsChatModalComponent } from './teams-chat-modal.component';

describe('TeamsChatModalComponent', () => {
  let component: TeamsChatModalComponent;
  let fixture: ComponentFixture<TeamsChatModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsChatModalComponent]
    });
    fixture = TestBed.createComponent(TeamsChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
