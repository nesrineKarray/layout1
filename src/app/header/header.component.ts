import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input() options: string[];
  @Output() optionSelected = new EventEmitter<string>();

  constructor() {
    this.options = []; // assign a value to the property
    // other constructor logic here
  }
  // ici methode lire list category
  onSelect(options: string) {
    this.optionSelected.emit(options);
  }


}
