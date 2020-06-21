import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbStepComponent } from './breadcrumb-step.component';

describe('BreadcrumbStepComponent', () => {
  let component: BreadcrumbStepComponent;
  let fixture: ComponentFixture<BreadcrumbStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
