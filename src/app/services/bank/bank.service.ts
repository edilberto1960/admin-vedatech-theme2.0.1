import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { log } from 'util';


@Injectable()
export class BankService {

  constructor(private _http: HttpClient) {
    console.log('Servicio BankService...');
    
   }


   getBankAcc() {
console.log('Pasamos la Bank Service');
 let url = 'http://localhost:8080/bank/list';
    console.log('VAMOS A LOGOUT');
    
  return this._http.get(url, { withCredentials: true });
          
  }

  getCustomerAcc() {
    console.log('Pasamos la Bank Service');
     let url = 'http://localhost:8080/customer/list';
        console.log('VAMOS A Customer list');
        
      return this._http.get(url, { withCredentials: true });
              
      }

      getSupplierAcc() {
        console.log('Pasamos la Bank Service');
         let url = 'http://localhost:8080/supplier/list';
            console.log('VAMOS A Customer list');
            
          return this._http.get(url, { withCredentials: true });
                  
          }

  
}

export interface Bank {
  id: number;
  accountNumber: string;
  balance: number;
  createAt: string;
  email: string;
  nameBank: string;
  phone: string;
}

export interface Customer {
  id: number;
  accountNumber: string;
  balance: number;
  createAt: string;
  email: string;
  nameCustomer: string;
  phone: string;
}

export interface Supplier {
  id: number;
  accountNumber: string;
  balance: number;
  createAt: string;
  email: string;
  nameSupplier: string;
  phone: string;
}

