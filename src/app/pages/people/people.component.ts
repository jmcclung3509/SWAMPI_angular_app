import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  data: any;
  people: any;
  allPeople!: any;
  searchText!: '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.loadPeople(1)
  }

  loadPeople(page: number) {
    page = Math.floor((Math.random() * 7) + 1);
    console.log(page)
    this.http
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data)
        this.people = res.results;
        this.allPeople = this.people
        console.log(this.people)


      })
  }
  search(value: string): void {
    this.people = this.allPeople.filter((val: any) => val.name.toLowerCase().includes(value))
  }

}
