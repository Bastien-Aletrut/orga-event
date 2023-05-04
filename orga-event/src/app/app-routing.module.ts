import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerEvenementComponent } from './creer-evenement/creer-evenement.component';
import { ListeEvenementComponent } from './liste-evenement/liste-evenement.component';

const routes: Routes = [
  {
    path:"creerEvenement",
    component: CreerEvenementComponent
  },
  {
    path:"",
    component:ListeEvenementComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
