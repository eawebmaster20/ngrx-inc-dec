import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './state/counter.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogicService } from './shared/services/logic.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrxInDec';
  resetBool:boolean = false;
  counter:Observable<number> = this.store.select('counter');
  constructor(private store: Store<{ counter: number }>, public counterLogicService: LogicService) {  }
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset() {
    this.animateResetButton();
    this.store.dispatch(reset());
  }
  animateResetButton(){
    this.resetBool = true;
    setTimeout(() => {
      this.resetBool = false;
    }, 1000);
  }
}
