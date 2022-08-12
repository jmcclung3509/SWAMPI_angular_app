import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { PersonComponent } from './pages/people/person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetComponent } from './pages/planets/planet/planet.component';
import { StarshipComponent } from './pages/starships/starship/starship.component';
import { WookieComponent } from './pages/wookie/wookie.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    PersonComponent,
    PlanetComponent,
    StarshipComponent,
    WookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
