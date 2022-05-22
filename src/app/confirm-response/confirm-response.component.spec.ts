import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmResponseComponent } from './confirm-response.component';

describe('ConfirmResponseComponent', () => {
  let component: ConfirmResponseComponent;
  let fixture: ComponentFixture<ConfirmResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
