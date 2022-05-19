import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donnees',
  template: `
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" class="navbar-menu">
  <div class="navbar-brand">
    <a class="navbar-item">
      Nom Prénom
    </a>
  </div>
  </div>
  <div class="navbar-menu">
  <div class="navbar-end"> 
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Mon Compte
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Mon Profil
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" routerLink="/">
            Déconnexion
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  `,
  styles: [],
})
export class DonneesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
