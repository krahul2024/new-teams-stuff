import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePreviewComponent } from './share-preview.component';

describe('SharePreviewComponent', () => {
  let component: SharePreviewComponent;
  let fixture: ComponentFixture<SharePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharePreviewComponent]
    });
    fixture = TestBed.createComponent(SharePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
