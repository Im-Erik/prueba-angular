import {Component, output, signal } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-add-personaje',
  imports: [],
  templateUrl: './addPersonaje.component.html',  
})
export class AddPersonajeComponent { 

  name = signal('Nada');
  power = signal(0)


  addPersonajeOut = output<Personaje>();

  addPersonaje() {
    if(!this.name() || !this.power() || this.power() < 100){
      return
    }

    const newPersonaje: Personaje = {
      id :Math.floor(Math.random()*1000),
      name : this.name(),
      power : this.power(),
    }

    // this.personajes.update(list => [...list, newPersonaje])
    this.addPersonajeOut.emit(newPersonaje);
    this.resetFields();
  }

  resetFields(){
    this.name.set(''),
    this.power.set(0)
  }



}
