import { MessageService } from './message.service';
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

  // This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Modify the getHeroes method to send a message when the heroes are fetched.
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {

    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
