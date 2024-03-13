import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './componentes/painel/painel.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { TurmasComponent } from './componentes/turmas/turmas.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    PrincipalComponent,
    WelcomeComponent,
    TurmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
