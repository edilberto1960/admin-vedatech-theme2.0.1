import {RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { RxjsComponent } from './rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { LoginGuardsGuard } from '../services/service.index';





const pagesRoutes: Routes = [

    {
        path: '',
   component: PagesComponent,
   canActivate: [LoginGuardsGuard],
    children: [
        {path : 'dashboard',  component: DashboardComponent, data: {titulo: 'Dashboard', description: 'Administration General'}},
        {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress Bars'}},
        {path : 'graficas',  component: GraficasComponent, data: {titulo: 'Graficas'}},
        {path : 'promesas',  component: PromesasComponent, data: {titulo: 'Graficas'}},
        {path : 'rxjs',  component: RxjsComponent, data: {titulo: 'Observables'}},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

