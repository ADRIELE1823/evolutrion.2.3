import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './componentes/painel/painel.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';

const routes: Routes = [
     {path: "painel", component: PainelComponent },
    {path:"", component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
