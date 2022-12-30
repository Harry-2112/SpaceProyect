import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComanderComponent } from './paginas/comander/comander.component';
import { CrewComponent } from './paginas/crew/crew.component';
import { DestinationComponent } from './paginas/destination/destination.component';
import { EngineerComponent } from './paginas/engineer/engineer.component';
import { EuropaComponent } from './paginas/europa/europa.component';
import { HomeComponent } from './paginas/home/home.component';
import { MarsComponent } from './paginas/mars/mars.component';
import { MissionComponent } from './paginas/mission/mission.component';
import { MoonComponent } from './paginas/moon/moon.component';
import { PilotComponent } from './paginas/pilot/pilot.component';
import { TecCapsulaComponent } from './paginas/tec-capsula/tec-capsula.component';
import { TecPuertoComponent } from './paginas/tec-puerto/tec-puerto.component';
import { TecVehiculoComponent } from './paginas/tec-vehiculo/tec-vehiculo.component';
import { TechnologyComponent } from './paginas/technology/technology.component';
import { TitanComponent } from './paginas/titan/titan.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"crew",component:CrewComponent,
  children:[
    {path:"comander",component:ComanderComponent},
    {path:"mission",component:MissionComponent},
    {path:"pilot",component:PilotComponent},
    {path:"engineer",component:EngineerComponent},
  ]
},
  {path:"destination",component:DestinationComponent,
  children:[
    {path:"moom",component:MoonComponent},
    {path:"mars", component:MarsComponent},
    {path:"europa",component:EuropaComponent},
    {path:"titan",component:TitanComponent}
  ]},
  {path:"technology",component:TechnologyComponent,
  children:[
    {path:"vehiculo",component:TecVehiculoComponent},
    {path:"puerto",component:TecPuertoComponent},
    {path:"capsula",component:TecCapsulaComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
