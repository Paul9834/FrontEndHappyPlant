import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
  {path: 'perfilUsuario', component: PerfilUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
