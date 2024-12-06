import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuresComponent } from './cures.component';

describe('CuresComponent', () => {
  let component: CuresComponent;
  let fixture: ComponentFixture<CuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
