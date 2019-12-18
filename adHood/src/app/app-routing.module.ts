import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoggedInGuard } from './config/LoggedInGuard';
import { CadastroCampanhaComponent } from './cadastro-campanha/cadastro-campanha.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
  {path: 'cliente', component: CadastroClienteComponent, canActivate: [LoggedInGuard]},
  {path: 'campanha', component: CadastroCampanhaComponent, canActivate: [LoggedInGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
