import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroCampanhaComponent } from './cadastro-campanha/cadastro-campanha.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { LoggedInGuardAdmin } from './config/LoggedInGuardAdmin';
import { CampDriveComponent } from './camp-drive/camp-drive.component';
import { LoggedInGuardOperador } from './config/LoggedInGuardOperador';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: CadastroClienteComponent, canActivate: [LoggedInGuardAdmin]},
  {path: 'campanha', component: CadastroCampanhaComponent, canActivate: [LoggedInGuardAdmin]},
  {path: 'pessoa', component: CadastroPessoaComponent, canActivate: [LoggedInGuardAdmin]},
  {path: 'campdrive', component: CampDriveComponent, canActivate: [LoggedInGuardOperador]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
