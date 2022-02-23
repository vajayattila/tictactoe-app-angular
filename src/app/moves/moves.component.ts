import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HistoryItemType } from '../history-item-type';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  @Input() history: Array<HistoryItemType>
  @Output() jumpTo = new EventEmitter<object>()

  constructor() { }

  ngOnInit(): void {
  }

  onJumpTo(step){
    this.jumpTo.emit({step: step});
  }

}
