import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Output() searchedName = new EventEmitter<string>();
  name = '';
  search(event: any) {
    event.preventDefault();
    this.searchedName.emit(this.name);

  }



  ngOnInit(): void {
  }

}
