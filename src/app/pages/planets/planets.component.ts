import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  data: any;
  planets: any
  allPlanets:any;
  searchText!:"";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPlanets()
  }
  loadPlanets() {

    let page = Math.floor((Math.random() * 5) + 1);
    this.http
      .get(`https://swapi.dev/api/planets/?page=${page}`)
      .subscribe((res: any) => {
        this.data = res
        this.planets = res.results
        console.log(res)
        console.log(this.planets)
      })
  }
  search(value:any): void {
    this.planets = this.allPlanets.filter((val:any)=>val.name.toLowerCase.includes(value))
  }

}
