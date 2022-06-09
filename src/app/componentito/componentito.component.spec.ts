import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentitoComponent } from './componentito.component';

describe('ComponentitoComponent', () => {
  let component: ComponentitoComponent;
  let fixture: ComponentFixture<ComponentitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
