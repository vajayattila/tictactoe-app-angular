import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HistoryItemType } from '../history-item-type';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() current: HistoryItemType
  @Output() cellClick = new EventEmitter<object>()  

  constructor() { }

  ngOnInit(): void {
  }

  onCellClick(payload){
    //console.log(payload)    
    this.cellClick.emit(payload)
  }  

}
