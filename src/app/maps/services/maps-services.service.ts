import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { DirectionsApiClient } from '../api/directionsApiClient';
import { Feature } from '../interfaces/places';
import { DireccionesResponse, Route } from '../interfaces/directions';

@Injectable({
  providedIn: 'root'
})
export class MapsServicesService {

  private map?: Map;
  private markers: Marker[] = [];

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

  createMarkersPlaces(places: Feature[], userLocation: [number, number]){
    if(!this.map) throw new Error('Sin mapa para mostrar');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`
        <h6>${place.text_es}</h6>
        <span>${place.place_name}</span>
      `);
      const newMarker = new Marker()
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.map);

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers;
    if(places.length === 0) return;

    //limites 
    const bounds =  new LngLatBounds();

    newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
    this.map.fitBounds(bounds, {
      padding: 200
    })
  }

  constructor(private directionsApi: DirectionsApiClient) { }

  getRouteBetweenPoints(start: [number, number], end: [number, number]){
    this.directionsApi.get<DireccionesResponse>(`/${start.join(',')};${end.join(',')}`)
    .subscribe(resp => this.drawPolyLine(resp.routes[0]));
  }

  private drawPolyLine(route: Route){

    if(!this.map) throw new Error('Sin mapa');

    const coord = route.geometry.coordinates;
    const bounds = new LngLatBounds();

    coord.forEach(([lng, lat]) => {
      bounds.extend([lng, lat]);
    });

    this.map.fitBounds(bounds, {
      padding: 200
    })

    //PolyLine
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coord
            }
          }
        ]
      }
    }
    if(this.map.getLayer('DataSource')){
      this.map.removeLayer('DataSource');
      this.map.removeSource('DataSource');
    }
    this.map.addSource('DataSource', sourceData);
    this.map.addLayer({
      id: 'DataSource',
      type: 'line',
      source: 'DataSource',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'blue',
        'line-width': 3
      }
    });
  }
}
