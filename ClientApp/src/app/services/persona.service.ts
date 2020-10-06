import { Injectable } from '@angular/core';
import { Persona } from '../Ayuda/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  get(): Persona[] {
        return JSON.parse(localStorage.getItem('informacion'));
      }
    post(persona: Persona) {
          let personas: Persona[] = [];
          if (this.get() != null) {
            personas = this.get();
          }
          personas.push(persona);
          localStorage.setItem('informacion', JSON.stringify(personas));
    }      
}
