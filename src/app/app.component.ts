import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
      value=0;
      Increment(){
        this.value++;
      }
      Decrement(){
        this.value--;
      }
      Reset(){
        this.value=0
      }

}

