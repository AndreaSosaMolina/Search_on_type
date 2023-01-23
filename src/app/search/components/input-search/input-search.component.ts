
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  
})
export class InputSearchComponent {

  search: string = '';

  @Output() onSearch : EventEmitter<string> = new EventEmitter();


  find(){
    this.onSearch.emit(this.search);
  }



}
