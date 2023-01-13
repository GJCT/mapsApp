import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api/placesApiClient';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];
  
  
  get isUserLoctionReady():boolean{
    return !!this.userLocation;
  }

  constructor(private placesApiClient: PlacesApiClient) {
    this.getUserLocation();
   }

  getUserLocation(): Promise<[number, number]>{
    return new Promise( (resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=> {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) =>{
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesQuery(query: string = ''){
    if(!this.userLocation){throw new Error('No userLocation')};

    this.isLoadingPlaces = true;

    this.placesApiClient.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.userLocation.join(',')
      }
    })
    .subscribe(resp => {
      console.log(resp.features)
      this.isLoadingPlaces = false;
      this.places = resp.features;
    });
  }
}
