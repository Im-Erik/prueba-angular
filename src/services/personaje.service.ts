import { effect, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Injectable({providedIn: 'root'})
export class PersonajeService {
    
    personajes = signal<Personaje[]>([
    {id:1, name: 'Maestro', power: 15000},
    {id:2, name: 'Rochi', power: 8000},
    {id:3, name:'Bulma', power:900},
    {id:4, name: 'Krillin', power:6500}
  ])

saveToLocalStorage = effect(() => {
    // console.log(`Contador de personajes ${this.personajes().length}`)
    localStorage.setItem('personajes', JSON.stringify(this.personajes()));
})


  agregarAlArreglo(personaje:Personaje){
    this.personajes.update((list)=> [...list, personaje])
  }

}