import { Component, OnInit } from '@angular/core';
import { HistoryItemType } from '../history-item-type'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  history: Array<HistoryItemType>
  xIsNext: Boolean;
  thereIsAWinner:Boolean;
  stepNumber: number;

  constructor() { }

  ngOnInit(): void {
    this.history=[{
      squares: Array(9).fill(null)
    }]
    this.xIsNext=true
    this.thereIsAWinner=false
    this.stepNumber=0 
  }

  getCurrent(){
    if(!this.stepNumber){
      this.stepNumber=0
    }
    return this.history[this.stepNumber]
  }

  onCellClick(payload){
    let {index}=payload
    // console.log(payload)
    this.handleClick(index)      
  }
  
  handleClick(i){
    const history = this.history.slice(0, this.stepNumber + 1)
    const curr = history[history.length - 1];
    const squares = curr.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
        return;
    }
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.history= history.concat([{
            squares: squares
    }])
    this.stepNumber=history.length
    this.xIsNext=!this.xIsNext
  }

  calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
  }  
  
  getStatus(){
    let stat=null  
    let winner = this.calculateWinner(this.getCurrent().squares)  
    if (winner) {
        stat = 'Winner: ' + winner
        this.thereIsAWinner = true
    } else {
        stat = 'Next player: ' + (this.xIsNext ? 'X' : 'O')
    }
    return stat     
  }

  onJumpTo(payload){
    let{step}=payload 
    this.stepNumber=step
    this.xIsNext=step%2===0       
  }
}
