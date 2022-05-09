import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { NewTransitionComponent } from './components/new-transition/new-transition.component';
import { TransitionsListComponent } from './components/transitions-list/transitions-list.component';

const routes: Routes = [
  { path: 'new-transition', component: NewTransitionComponent },
  { path: 'transitions', component: TransitionsListComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '', redirectTo: 'transitions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
