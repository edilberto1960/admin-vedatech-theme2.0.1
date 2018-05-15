import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

     // tslint:disable-next-line:no-inferrable-types
     labels: string = '';
     // tslint:disable-next-line:no-inferrable-types
     description: string = '';


  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta  
    ) {

        
        this.getDataRoute()
              .subscribe( data => {
              console.log('EVENT: ', data);
              this.labels = data.titulo;
              this.description = data.description;
              this.title.setTitle(data.titulo);

              let metaTag: MetaDefinition = {
                  name: this.description,
                  content: this.labels
              };

              this.meta.updateTag(metaTag);

            });

   }

           getDataRoute() {
        
           return this.router.events
                      .filter( evento => evento instanceof ActivationEnd)
                      .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null)
                      .map ( (evento: ActivationEnd) => evento.snapshot.data)
        
           }
        
  ngOnInit() {
  }

}
