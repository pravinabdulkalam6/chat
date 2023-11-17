import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainchatpdfComponent } from './mainchatpdf.component';

describe('MainchatpdfComponent', () => {
  let component: MainchatpdfComponent;
  let fixture: ComponentFixture<MainchatpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainchatpdfComponent]
    });
    fixture = TestBed.createComponent(MainchatpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
