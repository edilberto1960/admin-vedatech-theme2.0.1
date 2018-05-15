import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

   
     this.contadorPromesa().then(

        (mensaje) => console.log('Esto se---', mensaje)

      )
      .catch( error => console.error('Error en la promesa', error));

      

  }

  ngOnInit() {
  }

  contadorPromesa(): Promise<boolean> {
    return new Promise(( resolve, reject ) => {

      let contador = 0;
 
     let intervalo = setInterval(() => {
 
         contador += 1;
         console.log(contador);
 
        if (contador === 6) {
          console.log('pasamos por tres');
          
        //   resolve(true);
          
         } 
         
         if (contador > 0 ) {
 
           console.log('comparamos antes de 10');
           
           if ( contador === 4 ) {
             console.log('el numero es: ', contador);
              reject(false);
 
             }
             
             
         }
         
 
      }, 1000);
 
     });
 
    

  }

}
