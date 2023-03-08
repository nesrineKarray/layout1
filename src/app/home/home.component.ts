import { Component } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // public navigateToSection(section: string) {
  //   window.location.hash = '';
  //   window.location.hash = section;
  // }
}
