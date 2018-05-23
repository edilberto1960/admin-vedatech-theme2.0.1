import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
// temporary
import { IncrementadorComponent } from '../component/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../component/grafico-dona/grafico-dona.component';
import { GraficoBarComponent } from '../component/grafico-bar/grafico-bar.component';
import { RxjsComponent } from './rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { BankComponent } from './bank/bank.component';



@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    BrowserModule,
    ChartsModule
      ],
      
  declarations: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  GraficasComponent,
  IncrementadorComponent,
  GraficoDonaComponent,
  GraficoBarComponent,
  RxjsComponent,
  PromesasComponent,
  BankComponent  
  
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    BankComponent
    
    ]

})
export class PagesModule { }
