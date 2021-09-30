import { Component, ContentChildren, Directive, Input, QueryList, TemplateRef } from '@angular/core';

@Directive({ selector: '[app-async-all]' })
export class AsyncAllStatesComponent {}
@Directive({ selector: '[app-async-inactive]' })
export class AsyncInactiveComponent {}
@Directive({ selector: '[app-async-pending]' })
export class AsyncPendingComponent {}
@Directive({ selector: '[app-async-success]' })
export class AsyncSuccessComponent {}
@Directive({ selector: '[app-async-error]' })
export class AsyncErrorComponent {}

@Component({
  selector: 'ngx-async-template',
  templateUrl: './ngx-async-template.component.html',
  styles: [':host { display: block; }'],
})
export class NgxAsyncTemplateComponent {
  @Input() promise: Promise<any> = null;
  public promiseStatus: 'inactive' | 'pending' | 'success' | 'error' = 'inactive';
  public promiseValue: any;
  public promiseErrors: any;

  @ContentChildren(AsyncAllStatesComponent, { read: TemplateRef }) allStates: QueryList<TemplateRef<any>>;
  @ContentChildren(AsyncInactiveComponent, { read: TemplateRef }) inactive: QueryList<TemplateRef<any>>;
  @ContentChildren(AsyncPendingComponent, { read: TemplateRef }) pending: QueryList<TemplateRef<any>>;
  @ContentChildren(AsyncSuccessComponent, { read: TemplateRef }) success: QueryList<TemplateRef<any>>;
  @ContentChildren(AsyncErrorComponent, { read: TemplateRef }) error: QueryList<TemplateRef<any>>;

  constructor() {}

  ngOnChanges(): void {
    this.promiseValue = null;
    if (!this.promise) {
      this.promiseStatus = 'inactive';
    } else {
      this.promiseStatus = 'pending';
      this.promise.then(
        (res) => {
          this.promiseStatus = 'success';
          this.promiseValue = res;
        },
        (res) => {
          this.promiseStatus = 'error';
          this.promiseErrors = res;
        }
      );
    }
  }
}
