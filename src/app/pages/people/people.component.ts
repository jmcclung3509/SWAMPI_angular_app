import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  data: any;
  people: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPeople(1)
  }
  loadPeople(page: number) {
    this.http
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .subscribe((res: any) => {
        this.data = res;
        this.people = res.results;
        console.log(this.people)

      })
  }

}
