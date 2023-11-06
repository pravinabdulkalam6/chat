import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatpdfComponent } from './chatpdf.component';

describe('ChatpdfComponent', () => {
  let component: ChatpdfComponent;
  let fixture: ComponentFixture<ChatpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatpdfComponent]
    });
    fixture = TestBed.createComponent(ChatpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
