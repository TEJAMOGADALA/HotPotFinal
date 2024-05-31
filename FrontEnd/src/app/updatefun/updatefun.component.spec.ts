import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefunComponent } from './updatefun.component';

describe('UpdatefunComponent', () => {
  let component: UpdatefunComponent;
  let fixture: ComponentFixture<UpdatefunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatefunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatefunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
