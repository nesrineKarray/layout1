import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { AvanceComponent } from './avance/avance.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FactsComponent } from './facts/facts.component';
import { ProductComponent } from './product/product.component';

import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { GlobaleComponent } from './globale/globale.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildrenComponent } from './children/children.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ServiceComponent,
    LoginComponent,
    AvanceComponent,
    TopbarComponent,
    FactsComponent,
    ProductComponent,
    TeamComponent,
    TestimonialComponent,
    ListArticleComponent,
    GlobaleComponent,
    CategorieComponent,
    ChildrenComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
