import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Popup, Marker} from 'mapbox-gl';
import { MapsServicesService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(private placesServices: PlacesService,
              private mapsServices: MapsServicesService){}
  
  
  ngAfterViewInit(): void {
    if(!this.placesServices.userLocation){
      throw new Error('No hay localización');
    }

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 16, // starting zoom
    });

    const popup = new Popup()
    .setHTML(`
      <h6>Aquí Estoy</h6>
      <span>Estoy en este lugar del mundo</span>
    `);

    new Marker({color: 'blue'}).setLngLat(this.placesServices.userLocation)
    .setPopup(popup).addTo(map)

    this.mapsServices.setMap(map);
  }

}
