import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxAsyncTemplateModule} from "@klippa/ngx-async-template";

@NgModule({
  imports: [
    BrowserModule,
    NgxAsyncTemplateModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
