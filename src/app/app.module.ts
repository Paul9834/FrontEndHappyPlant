import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  {MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './home/home.component';


import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import {HttpClientModule } from '@angular/common/http';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    PerfilUsuarioComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
