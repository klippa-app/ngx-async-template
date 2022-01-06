import { Component, ContentChildren, Directive, Input, QueryList, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-async-all]' })
export class AsyncAllStatesComponent {}
@Directive({ selector: '[ngx-async-inactive]' })
export class AsyncInactiveComponent {}
@Directive({ selector: '[ngx-async-pending]' })
export class AsyncPendingComponent {}
@Directive({ selector: '[ngx-async-success]' })
export class AsyncSuccessComponent {}
@Directive({ selector: '[ngx-async-error]' })
export class AsyncErrorComponent {}

@Component({
  selector: 'ngx-async-template',
  templateUrl: './ngx-async-template.component.html',
  styles: [':host { display: block; }'],
})
export class NgxAsyncTemplateComponent {
  @Input() promise: Promise<any> = null;
  @Input() successStateOnReload: boolean = false; // when true, from the second (!) time the promise is loaded, we keep the previous success state with its data
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
    if (!this.promise) {
      this.promiseValue = null;
      this.promiseStatus = 'inactive';
    } else {
      if (this.successStateOnReload && this.promiseStatus === 'success') {
        // dont show the pending state
      } else {
        this.promiseValue = null;
        this.promiseStatus = 'pending';
      }
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
