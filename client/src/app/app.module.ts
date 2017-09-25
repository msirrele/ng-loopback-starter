import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdFormFieldModule, MdInputModule, MdTableModule, MdListModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SDKBrowserModule.forRoot(),
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdFormFieldModule,
    MdInputModule,
    MdTableModule,
    MdListModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
