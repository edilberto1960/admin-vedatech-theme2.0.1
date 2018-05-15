import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { element } from 'protractor';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
 @Input() leyenda = 'Leyenda';
 @Input() incrementValue = 50;

 @Output() changeValueBar: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onChange(event) {

     // tslint:disable-next-line:prefer-const
    //  let elemento = document.getElementsByName('incrementValue')[0];



    console.log('Evento', event);
    if ( event >= 100 ) {
      this.incrementValue = 100;
    } else if ( event <= 0 ) {
       this.incrementValue = 0;
    } else {
      this.incrementValue = event;
    }

    // elemento.value = this.incrementValue ;
    this.txtProgress.nativeElement.value = this.incrementValue;
    this.changeValueBar.emit(this.incrementValue);
  }



  cambiarValor(number) {
  if ( this.incrementValue >= 100 && number > 0 ) {
    this.incrementValue = 100;
    return;
  }

  if ( this.incrementValue <= 0 && number < 0) {
    this.incrementValue = 0;
    return;
  }
  this.incrementValue = this.incrementValue + number;
   this.changeValueBar.emit(this.incrementValue);
   this.txtProgress.nativeElement.focus();
  }

}
