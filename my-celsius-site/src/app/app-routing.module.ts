import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DonneesComponent } from './donnees/donnees.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenueComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'donnees',
    component: DonneesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
