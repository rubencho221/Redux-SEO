import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { RESET } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  imports: [],
  templateUrl: './nieto.html',
  styles: ``
})
export class Nieto implements OnInit {

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

  resert() {
    //this.contador = 0;
    this.store.dispatch(RESET());
  }

}
