import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- en-tête--> 
    <app-header></app-header>

    <!-- router connexion -->
    <router-outlet></router-outlet>

    <!-- bas de page-->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'my-celsius-site';
}
