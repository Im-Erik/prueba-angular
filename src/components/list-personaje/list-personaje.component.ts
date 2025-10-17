import { Component, input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-list-personaje',
  imports: [],
  templateUrl: './list-personaje.component.html',  
})
export class ListPersonajeComponent {
personajes = input.required<Personaje[]>()
}
