import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { InputSearchComponent } from './components/input-search/input-search.component';



@NgModule({
  declarations:[
    SearchComponent,
    InputSearchComponent
  ],
 
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
