import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, UsuarioService, LoginGuardsGuard, BankService } from './service.index';
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
    LoginGuardsGuard,
    BankService
  ],
  declarations: []
})
export class ServiceModule { }
