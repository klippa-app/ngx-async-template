# NgxAsyncTemplate

Easily render templates based on the state of a promise:
- inactive
- pending
- success
- error

# Install guide

### yarn
`yarn add @klippa/ngx-async-template`

### npm
`npm install @klippa/ngx-async-template`

## Import

I recommend importing the module in a generic ui module and then export it from there, so you can use the ngx-async-template everywhere in your app.

```js
import { NgxAsyncTemplateModule } from '@klippa/ngx-async-template';

@NgModule({
	imports: [
		NgxAsyncTemplateModule,
	],
	exports: [
		NgxAsyncTemplateModule,
	],
	providers: [{ provide: NgbDateParserFormatter, useClass: DateFormatComponent }],
})
export class UiModule {}
```

# Example

```html

<ngx-async-template [promise]="userPromise">
  <ng-template ngx-async-inactive>
    loading not yet started
  </ng-template>
  <ng-template ngx-async-pending>
    loading
  </ng-template>
  <ng-template ngx-async-success let-users="value">
    result is {{users}}
  </ng-template>
  <ng-template ngx-async-error let-myErrors="errorMessages">
    something went wrong {{myErrors}}
  </ng-template>
  <ng-template ngx-async-all let-myState="status">
    Always rendered, state is {{myState}}
  </ng-template>
</ngx-async-template>
```

# Usage

To render templates, use one or more of the following directives on a `ng-template`:

- ngx-async-inactive
- ngx-async-pending
- ngx-async-success
- ngx-async-error
- ngx-async-all


- You can extract the value of a successful promise by using `let-someVarName="value"` where `someVarName` can be any name you want.
- To extract errors provided by a promise you can use `let-myErrors="errorMessages"` where `myErrors` can be any name you want.
- You can also extract the status of a promise, which can be helpful if you have a template with multiple directives (`<ng-template ngx-async-inactive ngx-async-pending...`) with `let-myState="status"` where `myState` can be any name you want.
