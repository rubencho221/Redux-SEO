import { Component, OnInit } from '@angular/core';
import { Nieto } from '../nieto/nieto';
import { AppState } from '../../app.reducers';
import { select, Store } from '@ngrx/store';
import { DIVIDIR, MULTIPLICAR } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  imports: [Nieto],
  templateUrl: './hijo.html',
  styles: ``
})
export class Hijo implements OnInit {

  contador!: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(select('contador')).subscribe((contador: number) => {
      this.contador = contador;
      console.log(contador);
    });
  }

  multiplicar() {
    
    this.store.dispatch(MULTIPLICAR({ payload: 5 }));

    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.store.dispatch(DIVIDIR({ payload: 2 }));
    //this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);
  }

}
