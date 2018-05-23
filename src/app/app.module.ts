import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { GraficoBarComponent } from './component/grafico-bar/grafico-bar.component';

// services
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent
    
    // SidebarComponent
   ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
