import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroCampanhaComponent } from './cadastro-campanha/cadastro-campanha.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { LoggedInGuardAdmin } from './config/LoggedInGuard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: CadastroClienteComponent, canActivate: [LoggedInGuardAdmin]},
  {path: 'campanha', component: CadastroCampanhaComponent, canActivate: [LoggedInGuardAdmin]},
  {path: 'pessoa', component: CadastroPessoaComponent, canActivate: [LoggedInGuardAdmin]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
