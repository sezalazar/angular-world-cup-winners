import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './Components/mi-componente/mi-componente.component';
import { CupwinnersComponent } from './Components/cupwinners/cupwinners.component';

@NgModule({
  declarations: [
    AppComponent,
    CupwinnersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
