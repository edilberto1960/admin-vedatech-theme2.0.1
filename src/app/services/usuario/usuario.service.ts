import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { resolvePtr } from 'dns';
import { log } from 'util';
import { HeaderComponent } from '../../shared/header/header.component';
import { Options } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  usuario: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { 
    console.log('usuario service listo');
    this.cargarStorage();
    
  }

  estaLogeado() {
    console.log('Valor de password en el local storage ', localStorage.getItem('usuario'));
    
    return (localStorage.getItem('usuario') != null ) ? true : false ;
  }

  logout() {

    let url = 'http://localhost:8080/logout';
    console.log('VAMOS A LOGOUT');
    
    this.http.get(url, { withCredentials: true })
          .subscribe(resp => {
            console.log('LOGOUT RESP ', resp);
            
          });
    this.usuario = null;
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  cargarStorage() {

    if (localStorage.getItem('usuario')) {
         
        this.usuario = JSON.parse( localStorage.getItem('usuario'));
    } else {
      this.usuario = null;
    }
  }


  login( usuario: Usuario, remember: boolean) {
    console.log('Valor que llega de usuario ', usuario);
    if (remember) {
      localStorage.setItem('username', usuario.username );
    } else {
      localStorage.removeItem('username');
    }
    let url = URL_SERVICIOS + '/index';
    let params = 'username=' + usuario.username + '&password=' + usuario.password;
    console.log('PARAMS ', params);
    
      let headers = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });

    return this.http.post(url, params, {headers: headers, withCredentials: true})
            .map((resp: any) => {
              console.log('Respuesta es ', resp);
              
               //   localStorage.setItem('id', resp.usuario.id);
                  localStorage.setItem('usuario', JSON.stringify(resp));
                  return true;
            }).catch( err => {
              console.log('Error Status ', err.status);
              swal('Error en el Login', err.error, 'error');
                return Observable.throw(err);
            });

  }

  crearUsuario( usuario: Usuario) {

    let url = URL_SERVICIOS + '/signup';

    return this.http.post(url,  usuario)
                .map( (resp: any) => {
                  console.log('Valores de la resp ', resp);
                  swal('Usuario Creado con Exito', usuario.email, 'success');
                  return resp.usuario;
                  
                }).catch( err => {
                  console.log('Error Status ', err.status);
                  swal('Error en el Login', 'usuario o email ya existe', 'error');
                    return Observable.throw(err);
                });

  }

}
