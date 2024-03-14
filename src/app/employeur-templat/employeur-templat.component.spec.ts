import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeurTemplatComponent } from './employeur-templat.component';

describe('EmployeurTemplatComponent', () => {
  let component: EmployeurTemplatComponent;
  let fixture: ComponentFixture<EmployeurTemplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeurTemplatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeurTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
