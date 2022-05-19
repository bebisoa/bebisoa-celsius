import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  template: `
  <section class="hero-is-link is bold">
    <div class="hero-body">
      <div class="container content has text-centered">
        <h1 class="title">Inscrivez-vous ici!</h1>
       </div>
     </div>
  </section>

  <form class="box">
  <div class="field">
    <label class="label">Nom</label>
    <div class="control">
      <input class="input" type="text">
    </div>
  </div>

  <div class="field">
    <label class="label">Prénom</label>
    <div class="control">
      <input class="input" type="text">
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="ex: is@exemple.com">
    </div>
  </div>

<div class="field">
  <label class="label">Mot de passe</label>
  <div class="control">
    <input class="input" type="password" placeholder="**********">
  </div>
</div>

<div class="field">
  <label class="label">Confirmer votre mot de passe</label>
  <div class="control">
    <input class="input" type="password" placeholder="**********">
  </div>
</div>

  <button class="button is-link">Créer le compte</button>
</form>
  `,
  styles: [],
})
export class InscriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
