import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaComponent } from './esca.component';

describe('EscaComponent', () => {
  let component: EscaComponent;
  let fixture: ComponentFixture<EscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
