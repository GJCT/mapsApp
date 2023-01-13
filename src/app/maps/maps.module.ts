import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsScreenComponent } from './screens/maps-screen/maps-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnLocationComponent } from './components/btn-location/btn-location.component';
import { LogoAngComponent } from './components/logo-ang/logo-ang.component';
import { SerarchBarComponent } from './components/serarch-bar/serarch-bar.component';
import { SerarchResultComponent } from './components/serarch-result/serarch-result.component';



@NgModule({
  declarations: [
    MapsScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnLocationComponent,
    LogoAngComponent,
    SerarchBarComponent,
    SerarchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapsScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnLocationComponent,
    LogoAngComponent,
    SerarchBarComponent,
    SerarchResultComponent
  ]
})
export class MapsModule { }
