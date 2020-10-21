import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  _urlPropietarios: string;


  constructor(private http: HttpClient) {
    this._urlPropietarios = "https://happyplantbackend.herokuapp.com/propietarios";
   }
  createUser(newUser: Usuario) {
        this.http.post(this._urlPropietarios, newUser).subscribe(user => console.log(user));
  }

  getUserByUsername(username: string): Observable <any> {

    let url = this._urlPropietarios +'/log/' + username;

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )

    return this.http.get(url, {
      headers: headers
    });

  }




}
