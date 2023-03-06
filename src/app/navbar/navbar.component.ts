import { Component } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
