import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = 'http://localhost:3000/themes';

  constructor(private http: HttpClient) {}

  getCategorie() {
    return this.http.get<Categorie []>(this.baseUrl);
  }
}
