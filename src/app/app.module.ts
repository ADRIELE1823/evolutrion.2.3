import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './componentes/painel/painel.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { LogarComponent } from './componentes/logar/logar.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { TurmasComponent } from './componentes/turmas/turmas.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    PrincipalComponent,
    WelcomeComponent,
    CabecalhoComponent,
    LogarComponent,
    AboutMeComponent,
    ContatoComponent,
    CadastroComponent,
    TurmasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
