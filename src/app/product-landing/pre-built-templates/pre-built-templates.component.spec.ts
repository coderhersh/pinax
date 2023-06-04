import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBuiltTemplatesComponent } from './pre-built-templates.component';

describe('PreBuiltTemplatesComponent', () => {
  let component: PreBuiltTemplatesComponent;
  let fixture: ComponentFixture<PreBuiltTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBuiltTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreBuiltTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
