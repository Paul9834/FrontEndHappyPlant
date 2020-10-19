import {Component, Input, OnInit} from '@angular/core';
import { Usuario } from '../models/user.model';
import {ThemePalette} from '@angular/material/core';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  title: string;


  newUser: Usuario;

  constructor(private userInfoService: UserInfoService) {
    this.title = 'REGISTRATE';
    this.newUser = new Usuario();
  }

  hide = true;
  color: ThemePalette = 'primary';

  ngOnInit(): void {
  }

  crearUsuario(){

    //Verificamos el objeto del usuario en consola//
    console.log(this.newUser);
    this.newUser.fotoPerfil = 'No avalaible';
    this.newUser.fechaRegistro = new Date();
    this.userInfoService.createUser(this.newUser);
   }
  }





