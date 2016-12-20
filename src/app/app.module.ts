

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, AddDialogComponent } from './app.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    AddDialogComponent
  ],
  entryComponents: [
    AppComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
