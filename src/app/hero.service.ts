import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// The @Injectable() decorator marks the class participates in the dependency injection system.
@Injectable({

  //When you provide the service at the root level, Angular creates a single, shared instance of HeroService
  // and injects into any class that asks for it. 
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }
}
