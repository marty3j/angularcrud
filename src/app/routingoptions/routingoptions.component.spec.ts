import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingoptionsComponent } from './routingoptions.component';

describe('RoutingoptionsComponent', () => {
  let component: RoutingoptionsComponent;
  let fixture: ComponentFixture<RoutingoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
