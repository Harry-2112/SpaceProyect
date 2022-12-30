import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { AppRoutingModule } from '../app-routing.module';
import { MoonComponent } from './moon/moon.component';
import { MarsComponent } from './mars/mars.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component';
import { DestinationNavComponent } from './destination-nav/destination-nav.component';
import { ComanderComponent } from './comander/comander.component';
import { MissionComponent } from './mission/mission.component';
import { PilotComponent } from './pilot/pilot.component';
import { EngineerComponent } from './engineer/engineer.component';
import { CrewNavigationComponent } from './crew-navigation/crew-navigation.component';
import { TecVehiculoComponent } from './tec-vehiculo/tec-vehiculo.component';
import { TecPuertoComponent } from './tec-puerto/tec-puerto.component';
import { TecCapsulaComponent } from './tec-capsula/tec-capsula.component';
import { TecnologyNavComponent } from './tecnology-nav/tecnology-nav.component';


@NgModule({
  declarations: [
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NavegacionComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    DestinationNavComponent,
    ComanderComponent,
    MissionComponent,
    PilotComponent,
    EngineerComponent,
    CrewNavigationComponent,
    TecVehiculoComponent,
    TecPuertoComponent,
    TecCapsulaComponent,
    TecnologyNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NavegacionComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    DestinationNavComponent,
    ComanderComponent,
    MissionComponent,
    PilotComponent,
    EngineerComponent,
    CrewNavigationComponent,
    TecVehiculoComponent,
    TecPuertoComponent,
    TecCapsulaComponent,
    TecnologyNavComponent
  ]
})
export class PaginasModule { }
