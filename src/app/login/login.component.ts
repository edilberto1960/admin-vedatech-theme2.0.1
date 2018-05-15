import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  remember: boolean = false;
  username: string;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    this.username = localStorage.getItem('username') || '';
    if ( this.username.length > 1) {
      this.remember = true;
    }
  }

  
  ingresar( forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, null, forma.value.username, null, forma.value.password, null, null );
    
    console.log('Ingresando...');
    
    console.log(forma.valid);
    
    console.log( forma.value);
    
    this._usuarioService.login(usuario, forma.value.remember)
                  .subscribe( returnTo => this.router.navigate(['/dashboard']) ); 
    
  //  this.router.navigate(['/dashboard']);
  }

}
