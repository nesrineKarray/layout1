import { Component } from '@angular/core';
import {CategorieService} from 'src/app/services/categorie.service';
import {Categorie} from 'src/app/models/categorie.model'
@Component({
  selector: 'app-cartes-affichant-categories',
  templateUrl: './cartes-affichant-categories.component.html',
  styleUrls: ['./cartes-affichant-categories.component.css']
})
export class CartesAffichantCategoriesComponent {
  data:Categorie[] =[];
  constructor(private dataCategorie: CategorieService) { }
  
  ngOnInit() {
    this.dataCategorie.getCategorie()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
}
