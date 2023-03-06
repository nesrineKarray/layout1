import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent {

  active = 'top';

  categorie:string[]=['juridique', 'fiscal' , 'social'] ;
  
}
