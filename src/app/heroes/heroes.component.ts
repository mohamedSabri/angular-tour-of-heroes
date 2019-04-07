import { HeroService } from './../hero.service';
import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService:HeroService) { }

  /**
   * While you could call getHeroes() in the constructor, that's not the best practice.
   * The Constructor shouldn't call a function that makes HTTP requests to a remote server as a real
   * data service would.Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular 
   * call ngOnInit at an appropriate time after constructing a HeroesComponent instance.
   */
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroes= this.heroService.getHeroes();
  }
}
