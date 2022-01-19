import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAsyncTemplateComponent } from './ngx-async-template.component';

describe('NgxAsyncTemplateComponent', () => {
  let component: NgxAsyncTemplateComponent;
  let fixture: ComponentFixture<NgxAsyncTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAsyncTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAsyncTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
