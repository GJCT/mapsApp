import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { PlacesService } from '../../services/places.service';
import { MapsServicesService } from '../../services/maps-services.service';

@Component({
  selector: 'app-serarch-result',
  templateUrl: './serarch-result.component.html',
  styleUrls: ['./serarch-result.component.css']
})
export class SerarchResultComponent {

  public selecId: string = '';

  constructor(private placesService: PlacesService,
              private mapServices: MapsServicesService){}

  get isLoadingPlaces(): boolean{
    return this.placesService.isLoadingPlaces;
  }


  get places(): Feature[]{
    return this.placesService.places;
  }

  flyTo(place: Feature){
    this.selecId = place.id;
    
    const [lng, lat]= place.center;
    this.mapServices.flyTo([lng, lat]);
  }

  directions(place: Feature){
    if(!this.placesService.userLocation) throw new Error('Sin location');
    this.placesService.deletePlaces();
    
    const start = this.placesService.userLocation;
    const end = place.center as [number, number];
    this.mapServices.getRouteBetweenPoints(start, end);
  }
}
