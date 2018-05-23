import { FormsModule } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import { BankService, Bank, Customer, Supplier } from '../../services/service.index';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})

@Injectable()
export class BankComponent implements OnInit {

  banks: Bank [];
  customer: Customer [];
  supplier: Supplier [];
  
  total = 0;
  customerTotal = 0;
  supplierTotal = 0;

  constructor(private _bankService: BankService) { 

  }
  
  ngOnInit() {
    
   
      console.log('Entramos a la funcion get');
      
          this._bankService.getBankAcc().subscribe(res => {
      
            this.banks = JSON.parse(JSON.stringify(res));
      
            for ( let i = 0; i < this.banks.length; i++) {
                this.total = this.total + this.banks[i].balance;
            }
             
            console.log('Valor Total ', this.total);
            
            console.log('Valor de this.banks ', this.banks);
            
          });
      
          console.log('Valor de banks ', this.banks);


          // Get Customer list

          this._bankService.getCustomerAcc().subscribe(res => {
      
            this.customer = JSON.parse(JSON.stringify(res));
      
            for ( let i = 0; i < this.customer.length; i++) {
                this.customerTotal = this.customerTotal + this.customer[i].balance;
            }
             
            console.log('Valor Total ', this.customerTotal);
            
            console.log('Valor de this.banks ', this.customer);
            
          });
      

            // Get Supplier list

            this._bankService.getSupplierAcc().subscribe(res => {
      
              this.supplier = JSON.parse(JSON.stringify(res));
        
              for ( let i = 0; i < this.supplier.length; i++) {
                  this.supplierTotal = this.supplierTotal + this.supplier[i].balance;
              }
               
              console.log('Valor Total ', this.supplierTotal);
              
              console.log('Valor de this.banks ', this.supplier);
              
            });
       
  }
  
  

}
