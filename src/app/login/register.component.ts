import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';
import { log } from 'util';


// declare function  init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

    forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public _router: Router
  ) { }

    evalPasswords( camp1: string, camp2: string) {
          
          return ( group: FormGroup) => {

            let pass1 = group.controls[camp1].value;
            let pass2 = group.controls[camp2].value;

            if ( pass1 === pass2 ) {
              return null;
            }

            return {
              evalPasswords: true
            };
          };
    }

  ngOnInit() {

    // init_plugins();
    this.forma = new FormGroup({

          firstName: new FormControl(null, Validators.required),
          lastName: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          username: new FormControl(null, Validators.required),
          password: new FormControl(null, Validators.required),
          password2: new FormControl(null, Validators.required),
          conditions: new FormControl(false),
    }, {validators: this.evalPasswords ('password', 'password2')});
  }

  registrarUsuario() {

    if (this.forma.invalid) {
      swal('Good job!', 'You clicked the button!', 'success');
      return;
    }
    console.log('Validations is ', this.forma.valid);
    console.log('Datos del Formulario ', this.forma.value);

    let usuario = new Usuario(
      this.forma.value.firstName,
      this.forma.value.lastName,
      this.forma.value.username,
      this.forma.value.email,
      this.forma.value.password
    );

    console.log('Valor de usuario ', usuario);
    
    this._usuarioService.crearUsuario(usuario)
                .subscribe( resp => {
                  console.log('Result', resp);
                  this._router.navigate(['/login']);
                });
    
  }
}
