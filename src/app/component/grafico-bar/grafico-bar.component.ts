import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-bar',
  templateUrl: './grafico-bar.component.html',
  styleUrls: []
})
export class GraficoBarComponent implements OnInit {

  @Input() public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  @Input() public barChartType = 'bar';
  @Input() public barChartLegend = true;

  @Input() public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

 // tslint:disable-next-line:no-input-rename
//  no funciona hay que investigar
 // tslint:disable-next-line:no-trailing-whitespace
 
 // tslint:disable-next-line:no-input-rename
 @Input('colors') public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];



  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    // tslint:disable-next-line:prefer-const
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    // tslint:disable-next-line:prefer-const
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
    */
        }
}
