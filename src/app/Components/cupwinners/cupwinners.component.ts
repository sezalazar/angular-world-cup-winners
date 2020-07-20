import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Winner } from './cupwinners.model'; /* Importamos el modelo link del mismo componente */

@Component({
  selector: 'app-cupwinners',
  templateUrl: './cupwinners.component.html',
  styleUrls: ['./cupwinners.component.css']
})
export class CupwinnersComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row.bg-primary'
  @Input() winner: Winner; /* Definimos que que este componente va a tener una entrada. La entrada es el arreglo Links definido en la clase del otro componente que nos envía links */
  constructor() { }

  ngOnInit(): void {
  }

  //userName='';
  click : boolean = false;

  onButtonClick(){
    this.click = !this.click;
  }

}
