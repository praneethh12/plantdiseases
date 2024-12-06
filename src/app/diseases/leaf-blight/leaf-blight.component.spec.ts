import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafBlightComponent } from './leaf-blight.component';

describe('LeafBlightComponent', () => {
  let component: LeafBlightComponent;
  let fixture: ComponentFixture<LeafBlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafBlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeafBlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
