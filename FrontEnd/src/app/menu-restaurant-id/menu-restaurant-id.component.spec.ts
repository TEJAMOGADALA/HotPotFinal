import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestaurantIdComponent } from './menu-restaurant-id.component';

describe('MenuRestaurantIdComponent', () => {
  let component: MenuRestaurantIdComponent;
  let fixture: ComponentFixture<MenuRestaurantIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuRestaurantIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuRestaurantIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
