import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  template: `
  <section class="hero-is-link is bold">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h1 class="title">Inscrivez-vous ici!</h1>
       </div>
     </div>
  </section>

  <form class="box">
  <div class="field">
    <label class="label">Nom</label>
    <div class="control">
      <input type="text" name="nom" class="input" [(ngModel)]="nom">
    </div>
  </div>

  <div class="field">
    <label class="label">Prénom</label>
    <div class="control">
      <input type="text" name="prénom" class="input" [(ngModel)]="prenom">
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input type="email" name="email" class="input" [(ngModel)]="email">
    </div>
  </div>

<div class="field">
  <label class="label">Mot de passe</label>
  <div class="control">
    <input type="password" name="mot de passe" class="input" [(ngModel)]="password">
  </div>
</div>

<div class="field">
  <label class="label">Confirmer votre mot de passe</label>
  <div class="control">
    <input type="password" name="vérification mot de passe" class="input" [(ngModel)]="verification">
  </div>
</div>

  <button class="button is-link">Créer le compte</button>
</form>
  `,
  styles: [],
})
export class InscriptionComponent implements OnInit {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  verification: string;

  constructor() {}

  ngOnInit(): void {}

  submitForm() {}
}
