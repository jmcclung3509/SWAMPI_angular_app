import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  data: any;
  starships: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadStarships(1)
  }
  loadStarships(page: number) {
    this.http
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .subscribe((res: any) => {
        this.data = res
        this.starships = res.results
        console.log(this.starships)
      })
  }
}


