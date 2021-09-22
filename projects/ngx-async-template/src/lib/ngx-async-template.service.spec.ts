import { TestBed } from '@angular/core/testing';

import { NgxAsyncTemplateService } from './ngx-async-template.service';

describe('NgxAsyncTemplateService', () => {
  let service: NgxAsyncTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAsyncTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
