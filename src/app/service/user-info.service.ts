import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {

   }

    createUser (newUser: Usuario) {
        this.http.post('https://', newUser).subscribe(user =>console.log(user));
    }
  }
