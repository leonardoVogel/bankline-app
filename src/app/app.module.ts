import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionsListComponent } from './components/transitions-list/transitions-list.component';
import { NewTransitionComponent } from './components/new-transition/new-transition.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ClientsComponent } from './components/clients/clients.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TransitionsListComponent,
    NewTransitionComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
