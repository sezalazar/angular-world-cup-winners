export class Winner{
  winner: string;
  year: number;
  votes: number;

  constructor(winner: string, year: number, votes?: number){
    this.winner = winner;
    this.year = year;
    this.votes = votes || 0; /* a la propiedad votes asignale lo que te viene en el contructor, o si no te viene nada asignale 0*/
  }

  voteUp(){
    this.votes++;
  }

  voteDown(){
    this.votes--;
  }

}
