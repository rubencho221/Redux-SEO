import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hijo } from './contador/hijo/hijo';
import { select, Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { DECREMENTAR, INCREMENTAR } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  contador!: number;

  constructor(
    private store: Store<AppState>
  ) {

    this.store.pipe(select('contador'))
      .subscribe( contador => this.contador = contador );
  }

  incrementar() {
    //this.contador ++;
    /*
    const accion: Action = {
      type: 'INCREMENTAR'
    };
    */

    this.store.dispatch(INCREMENTAR());

  }

  decrementar() {
    //this.contador --;
    /*
    const accion: Action = {
      type: 'DECREMENTAR'
    };
    */

    this.store.dispatch(DECREMENTAR());

  }

}
