import { Component, inject, signal } from '@angular/core';
import { ListPersonajeComponent } from "../../components/list-personaje/list-personaje.component";
import { AddPersonajeComponent } from "../../components/addPersonaje/addPersonaje.component";
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-pagina1',
  imports: [ListPersonajeComponent, AddPersonajeComponent],
  templateUrl: './pagina1.component.html',  
})
export class Pagina1Component {

public personajeService = inject(PersonajeService);


 }
