import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /**
   * You are usually binding a template to its own component class.
   * In such binding expressions, the component's property or method is to the right of the (=) operator ex==> <img [src]="iconUrl"/>
   * The iconUrl is a member of the AppComponent class no need to decorated it with @Input() or @Output.
   * 
   * In case of you want to bind a property of a different component, the other component's property is
   * to the left of the (=) operator ex==> <app-hero-detail [hero]="selectedHero"></app-hero-detail>
   * 
   * In the following example, the HeroesComponent template binds HeroesComponent class members (selectedHero)
   * to properties of the HeroDetailComponent (hero) whose selector is 'app-hero-detail'.
   * The Angular compiler won't bind to properties of a different component unless they are Input or Output properties.
   * 
   * declare @Input hero:Hero in HeroDetailComponent;
   * add selector with hero property in heroes.component.html <app-hero-detail [hero]="selectedHero"></app-hero-detail> to complete the binding.
   */
  // This property is bound using its original name (hero) and will automatically updated by Angular
  @Input() hero: Hero;
  constructor(
    /**
     * The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
     * This component is interested in the route's bag of parameters extracted from the URL.
     * The "id" parameter is the id of the hero to display.
     */
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }
}
