import { Component } from '@angular/core';
import { University } from '../../interfaces/university';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
     li {
      list-style-type: none;
    };
    ol {
      margin-bottom: 0;
      padding: 0
    }
    `
  ]
})
export class SearchComponent {

  universities: University[] = [];
  search: string = '';
  countrySelected: string = 'España';
  errorSearch: boolean = false;

  countries = [
    {name: 'España'},
    {name: 'Reino Unido'},
    {name: 'Portugal'}
  ]

  constructor( private uniService: UniversitiesService){}

  selectCountry( country: any): void{ 
    this.search = '';
    this.countrySelected = country.name;
    console.log(country);
    
   
  }

  searching( searchTerm: string){
    this.search = searchTerm

    this.uniService.getByCountryAndTerm(searchTerm, this.countrySelected)
    .subscribe( (u) => {
      console.log(u);
      this.universities = u;
     
    });
    
  }

 
}
