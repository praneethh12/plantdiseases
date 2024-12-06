import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackRotComponent } from './black-rot.component';

describe('BlackRotComponent', () => {
  let component: BlackRotComponent;
  let fixture: ComponentFixture<BlackRotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackRotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlackRotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
