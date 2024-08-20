import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './state/counter.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrxInDec';
  counter:Observable<number> = this.store.select('counter');
  constructor(private store: Store<{ counter: number }>) {
    // this.count$.subscribe(res => console.log(res)
    // )
  }
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
