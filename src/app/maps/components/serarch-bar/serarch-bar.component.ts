import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-serarch-bar',
  templateUrl: './serarch-bar.component.html',
  styleUrls: ['./serarch-bar.component.css']
})
export class SerarchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesServices: PlacesService ){}

  queryChanges(query: string =''){
    if(this.debounceTimer)clearTimeout (this.debounceTimer);

    this.debounceTimer = setTimeout(() =>{
      this.placesServices.getPlacesQuery(query);
    }, 350);
  }
}
