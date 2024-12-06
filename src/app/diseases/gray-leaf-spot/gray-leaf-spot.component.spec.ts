import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayLeafSpotComponent } from './gray-leaf-spot.component';

describe('GrayLeafSpotComponent', () => {
  let component: GrayLeafSpotComponent;
  let fixture: ComponentFixture<GrayLeafSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrayLeafSpotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrayLeafSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
