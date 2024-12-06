import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRustComponent } from './common-rust.component';

describe('CommonRustComponent', () => {
  let component: CommonRustComponent;
  let fixture: ComponentFixture<CommonRustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonRustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonRustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
