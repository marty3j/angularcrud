import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddComponent } from './updateadd.component';

describe('UpdateaddComponent', () => {
  let component: UpdateaddComponent;
  let fixture: ComponentFixture<UpdateaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
