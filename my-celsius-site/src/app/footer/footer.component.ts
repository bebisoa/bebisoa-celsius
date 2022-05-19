import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>02 Celsius</strong> créé par IS PROMO 2023. 
    </p>
  </div>
</footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
