import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerEvenementComponent } from './creer-evenement/creer-evenement.component';
import { ListeEvenementComponent } from './liste-evenement/liste-evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';

const routes: Routes = [
  {
    path:"creerEvenement",
    component: CreerEvenementComponent
  },
  {
    path:"",
    component:ListeEvenementComponent
  },
  {
    path:"seConnecter",
    component: ConnexionComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"listeParticipants/:id",
    component: ListeParticipantsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
