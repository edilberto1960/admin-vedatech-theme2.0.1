import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';



@Injectable()
export class LoginGuardsGuard implements CanActivate {

  constructor( 
    public _usuarioService: UsuarioService,
    public _router: Router
  ) {

  }
  canActivate() {

    if ( this._usuarioService.estaLogeado()) {
        console.log('PASO EL GUARD');
        return true;
    } else {

      console.log('BLOQUEADO POR EL GUARD');
      this._router.navigate(['/login']);
      return false;
    }

  }
}
