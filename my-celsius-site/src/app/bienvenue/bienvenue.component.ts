import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  template: `
<section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      Bienvenue sur 02 Celsius!
    </p>
  </div>
</section>

<footer class="footer">
  <div class="container content has-text-centered">
    <p>CONNEXION</p>
  </div>
  <form class="box">
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="ex : is@example.com">
    </div>
  </div>

  <div class="field">
    <label class="label">Mot de passe</label>
    <div class="control">
      <input class="input" type="password" placeholder="********">
    </div>
  </div>

  <button class="button is-primary" routerLink="/donnees">Connexion</button>
  <button class="button is-ghost">Mot de passe oublié?</button>
  <button class="button is-text" routerLink="/inscription">Créer un compte</button>
</form>
</footer>
  `,
  styles: [],
})
export class BienvenueComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
