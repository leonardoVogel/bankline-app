import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionsListComponent } from './components/transitions-list/transitions-list.component';
import { NewTransitionComponent } from './components/new-transition/new-transition.component';

@NgModule({
  declarations: [
    AppComponent,
    TransitionsListComponent,
    NewTransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
