import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() value: String
  @Input() index: number
  @Output() cellClick = new EventEmitter<object>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onCellClick(index){
    //console.log("cellClick:"+index)
    this.cellClick.emit({index: index});
  }

}
