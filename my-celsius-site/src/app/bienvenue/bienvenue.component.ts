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
  `,
  styles: [],
})
export class BienvenueComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
