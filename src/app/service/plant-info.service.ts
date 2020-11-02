import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../models/plant.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  _urlPlantas: string;


  constructor(private http: HttpClient) {
    this._urlPlantas = "https://happyplantbackend.herokuapp.com/planta";
   }
  createUser(newPlant: Planta) {
        this.http.post(this._urlPlantas, newPlant).subscribe(plant => console.log(plant));
  }

  getPlantById(id: string): Observable <any> {

    let url = this._urlPlantas +'/log/' + id;

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )

    return this.http.get(url, {
      headers: headers
    });

  }
  
  createUser(newPlant: Planta) {
        this.http.post(this._urlPlantas, newPlant).subscribe(plant => console.log(plant));
  }

  getPlantBySpecies(Species: string): Observable <any> {

    let url = this._urlPlantas +'/log/' + Species;

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )

    return this.http.get(url, {
      headers: headers
    });

  }




}
