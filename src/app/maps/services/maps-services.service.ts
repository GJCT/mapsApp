import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapsServicesService {

  private map?: Map;

  get isMapReady(){
    return !!this.map;
  }

  setMap(map: Map){
    this.map = map;
  }

  flyTo(coords: LngLatLike){
    if(!this.isMapReady){
      throw new Error('Mapa no listo');
    }
    this.map?.flyTo({
      zoom: 16,
      center: coords
    });
  }

  constructor() { }
}
