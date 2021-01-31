import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from "ngx-pagination";
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
