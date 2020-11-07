import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-actual-planta',
  templateUrl: './actual-planta.component.html',
  styleUrls: ['./actual-planta.component.css']
})
export class ActualPlantaComponent implements OnInit {
  online: boolean;
  title: string;
  constructor() { 
    this.title = 'Planta';
    this.online = false; 
  }
  color: ThemePalette = 'primary'

  ngOnInit(): void {
  }
}
