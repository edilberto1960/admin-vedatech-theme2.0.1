import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, UsuarioService, LoginGuardsGuard } from './service.index';
import { SidebarService } from './service.index';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
        
  ],
  providers: [
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardsGuard
  ],
  declarations: []
})
export class ServiceModule { }
