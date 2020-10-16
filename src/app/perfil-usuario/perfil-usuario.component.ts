import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  online: boolean;
  title: string;
  constructor() { 
    this.title = 'Perfil';
    this.online = false; 
  }
  color: ThemePalette = 'primary'

  ngOnInit(): void {
  }

  cambiarStatus(){
    this.online=!this.online;

  }

}
