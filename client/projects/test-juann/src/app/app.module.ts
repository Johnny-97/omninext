import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GiuraGiovanniModule } from 'GiuraGiovanni';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GiuraGiovanniModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
