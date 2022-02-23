import { Component, Input } from '@angular/core'
import { GameComponent } from './game/game.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() GameComponent?: GameComponent
  title = 'TicTacToe Game Demo For Angular'

  constructor() { }
  
}
