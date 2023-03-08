import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent {

  active = 'top';

  options: string[] = ['juridique', 'fiscal' , 'social'];
  selectedOption: string = 'juridique';

  onOptionSelected(options: string) {
    this.selectedOption = options;
}}
