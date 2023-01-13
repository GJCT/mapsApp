import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-maps-screen',
  templateUrl: './maps-screen.component.html'
})
export class MapsScreenComponent {

  constructor(private placesServices: PlacesService){}

  get isUserLocationReady(){
    return this.placesServices.isUserLoctionReady;
  }

}
