import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { PainelComponent } from './componentes/painel/painel/painel/painel.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { LogarComponent } from './componentes/logar/logar.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ContatoComponent } from './componentes/contato/contato.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
 { path: 'principal', component: PrincipalComponent },
 { path: 'painel',component:PainelComponent},
 { path: 'cabecalho', component:CabecalhoComponent},
 { path: 'logar', component:LogarComponent}, 
 { path:'about-me', component:AboutMeComponent},
 {path:'cadastro', component:CadastroComponent},
{path:'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
