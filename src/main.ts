import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

 
Mapboxgl.accessToken = 'pk.eyJ1Ijoia2lkY29kZSIsImEiOiJjbGN1aXA0Y3YwazdnM3FybGc1eWk5Z3RpIn0.aAOB8E-iCpZtLnl8BbU_uA';


if(!navigator.geolocation){
  throw new Error('No se puede localizar');
}

if(environment.production){
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
