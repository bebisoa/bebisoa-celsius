import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DonneesComponent } from './donnees/donnees.component';
import { DiagrammeComponent } from './diagramme/diagramme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BienvenueComponent,
    InscriptionComponent,
    DonneesComponent,
    DiagrammeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
