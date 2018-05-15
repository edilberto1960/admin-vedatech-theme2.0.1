import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
  {
    titulo: 'Banks',
    icono: 'fa fa-fw fa-bank',
    submenu: [
      {titulo: 'Add Account', url: '/dashboard'},
      {titulo: 'Add Check', url: '/progress'},
      {titulo: 'Add Deposit', url: '/graficas'},
      {titulo: 'Report Transaction', url: '/graficas'},
      {titulo: 'Promesas', url: '/promesas'},
      {titulo: 'Rxjs', url: '/rxjs'}
    ]

    }
  ];

  constructor() { }

}
