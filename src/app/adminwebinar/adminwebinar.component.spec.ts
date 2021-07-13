import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwebinarComponent } from './adminwebinar.component';

describe('AdminwebinarComponent', () => {
  let component: AdminwebinarComponent;
  let fixture: ComponentFixture<AdminwebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminwebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
