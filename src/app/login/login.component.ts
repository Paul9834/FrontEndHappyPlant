import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  permitido: boolean;
  usuario : Usuario;
  
  
  constructor(private userInfoService: UserInfoService) {
    this.permitido = false;
    this.usuario = new Usuario();
   }

  hide = true;

  ngOnInit(): void {
    
  }

  validar(){

    //test entradas
    console.log(this.username);
    console.log(this.password);

    //get de objeto Usuario por username
    this.userInfoService.getUserByUsername(this.username).subscribe(Response=>{

      let user = Response;

      /**
       * cast response a Usuario
       */
      this.usuario.nombrePropietario = user.nombrePropietario;
      this.usuario.fechaRegistro = user.fechaRegistro;
      this.usuario.fotoPerfil = user.fotoPerfil;
      this.usuario.email = user.email;
      this.usuario.usuario = user.usuario;
      this.usuario.pass = user.pass;
      });

      if(this.password == this.usuario.pass){
        this.permitido = true;
        
      }

    
    console.log(this.usuario);

  }

}
