import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanceComponent } from './avance/avance.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ChildrenComponent } from './children/children.component';

import { FactsComponent } from './facts/facts.component';
import { FooterComponent } from './footer/footer.component';
import { GlobaleComponent } from './globale/globale.component';
import { HomeComponent } from './home/home.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TopbarComponent } from './topbar/topbar.component';


const routes: Routes = [
  {path:"footer",component:FooterComponent},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"service",component:ServiceComponent},
  {path:"login",component:LoginComponent},
  {path:"avance",component:AvanceComponent},
  {path:"topbar",component:TopbarComponent},
  {path:"facts",component:FactsComponent},
  {path:"product",component:ProductComponent},
  {path:"team",component:TeamComponent},
  {path:"testimonial",component:TestimonialComponent},
  {path:"list-article",component:ListArticleComponent},
  {path:"globale",component:GlobaleComponent},
  {path:"categorie",component:CategorieComponent},
  {path:"children",component:ChildrenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
