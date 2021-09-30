import {NgModule} from '@angular/core';
import {
  NgxAsyncTemplateComponent,
  AsyncAllStatesComponent,
  AsyncInactiveComponent,
  AsyncPendingComponent,
  AsyncSuccessComponent,
  AsyncErrorComponent
} from './ngx-async-template.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxAsyncTemplateComponent,
    AsyncAllStatesComponent,
    AsyncInactiveComponent,
    AsyncPendingComponent,
    AsyncSuccessComponent,
    AsyncErrorComponent
  ],
  exports: [
    NgxAsyncTemplateComponent,
    AsyncAllStatesComponent,
    AsyncInactiveComponent,
    AsyncPendingComponent,
    AsyncSuccessComponent,
    AsyncErrorComponent
  ]
})
export class NgxAsyncTemplateModule {
}
