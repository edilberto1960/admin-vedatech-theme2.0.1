// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

    subscription: Subscription;

  constructor() { 
    
    this.subscription = this.returnObservable()
        .subscribe ( 
      numero => console.log('Observable is ', numero),
      error => console.log( 'Error is ', error),
      () => console.log('El Observable termino!! ')      
   );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se cerro...');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    
    return new Observable( observer => {

      let contador = 0;

    let intervalo = setInterval(() => {

         contador += 1;
 
         let salida = {
          valor: contador
        };

         observer.next( salida );

       
         if ( contador === 4) {
          //  observer.error('mensaje de error');
         //   clearInterval(intervalo);
         }
      

   }, 1000);

  })
  .retry(1)
  .map( (resp: any) => {

    return resp.valor;

  })
  .filter( (valor, index) => {

    console.log('Desde Filter ', valor , index);
    if ((valor % 2) == 1){
      
      return true;
    } else {
      return false;
    }

  });


  }

}
