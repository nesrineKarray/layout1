import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanceComponent } from './avance/avance.component';
import { CategoriesComponent } from './categories/categories.component';
// import { FactsComponent } from './home/facts/facts.component';
import { FooterComponent } from './footer/footer.component';
import { GlobaleComponent } from './globale/globale.component';
import { CartesAffichantCategoriesComponent } from './home/cartes-affichant-categories/cartes-affichant-categories.component';
import { HomeComponent } from './home/home.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
  import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  // {path:"footer",component:FooterComponent},
  {path:"",component:HomeComponent},
  // {path:"navbar",component:NavbarComponent},
  {path:"service",component:ServiceComponent},
  {path:"login",component:LoginComponent},
  {path:"recherche-pro",component:AvanceComponent},
  {path:"topbar",component:TopbarComponent},
  // {path:"facts",component:FactsComponent},
  {path:"list-article",component:ListArticleComponent},
  {path:"globale",component:GlobaleComponent},
  {path:"inscription",component:InscritComponent},
  {path:"cartes-categ",component:CartesAffichantCategoriesComponent},
  {path:"cat/:id",component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
