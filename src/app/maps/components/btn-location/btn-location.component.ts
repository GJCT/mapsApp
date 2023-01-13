import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { MapsServicesService } from '../../services/maps-services.service';

@Component({
  selector: 'app-btn-location',
  templateUrl: './btn-location.component.html',
  styleUrls: ['./btn-location.component.css']
})
export class BtnLocationComponent {

  constructor(private mapsServices: MapsServicesService,
              private placesServices: PlacesService){}


  location(){
    if(!this.placesServices.isUserLoctionReady){
      throw new Error('No tenemos ubicación');
    }
    if(!this.mapsServices.isMapReady){
      throw new Error('No tenemos mapas');
    }
    this.mapsServices.flyTo(this.placesServices.userLocation!);
  }
}
