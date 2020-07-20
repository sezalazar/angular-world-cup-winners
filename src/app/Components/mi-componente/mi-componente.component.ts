import { Component } from '@angular/core';


@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html'
})

export class MiComponente{
  public titulo: string;
  public comentario: string;
  public year: number;

  constructor(){
    console.log("Componente cargado");
    this.titulo = "El título de esta garcha";
    this.comentario = "Este es componente garcha";
    this.year = 2020;

  }
}
