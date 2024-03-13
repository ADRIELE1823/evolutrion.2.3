import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosBasicoComponent } from './elementos-basico.component';

describe('ElementosBasicoComponent', () => {
  let component: ElementosBasicoComponent;
  let fixture: ComponentFixture<ElementosBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementosBasicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementosBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
