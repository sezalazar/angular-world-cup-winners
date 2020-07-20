import { Component } from '@angular/core';
import { Winner } from './Components/cupwinners/cupwinners.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



  winners: Winner[];
  /*title: any;*/

  constructor() {
    this.winners =[ new Winner('Uruguay', 1930, 12),
                    new Winner('Italy', 1934, 7),
                    new Winner('Italy', 1938, 8),
                    new Winner('Uruguay', 1950, 80),
                    new Winner('Germany', 1954, 6),
                    new Winner('Brazil', 1958, 14),
                    new Winner('Brazil', 1962, 10),
                    new Winner('England', 1966, 4),
                    new Winner('Brazil', 1970, 11),
                    new Winner('Germany', 1974, 11),
                    new Winner('Argentina', 1978, 70),
                    new Winner('Italy', 1982, 30),
                    new Winner('Argentina', 1986, 1000),
                    new Winner('Germany', 1990, 30),
                    new Winner('Brazil', 1994, 30),
                    new Winner('France', 1998, 70),
                    new Winner('Brazil', 2002, 2),
                    new Winner('Italy', 2006, 20),
                    new Winner('Spain', 2010, 50),
                    new Winner('Germany', 2014, 40),
                    new Winner('France', 2018, 50),

    ];
  }




 addWinner(winner:HTMLInputElement, year:HTMLInputElement){


   if (winner.value.length != 0 && year.value.length != 0){
    this.winners.push(new Winner(winner.value, year.valueAsNumber));
   }
   winner.value = "";

   return false; /* Para que la web no se refresque al presionar el botón */
 }
}
