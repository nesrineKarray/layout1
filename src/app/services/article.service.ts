import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) {}

  getAbonnements() {
    return this.http.get<Article []>(this.baseUrl);
  }
}
