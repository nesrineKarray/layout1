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
import { SocialeComponent } from './sociale/sociale.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { VaerticalComponent } from './vaertical/vaertical.component';
import { JuridiqueComponent } from './juridique/juridique.component';
import { FiscalComponent } from './fiscal/fiscal.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { GlobaleComponent } from './globale/globale.component';


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
    SocialeComponent,
    TeamComponent,
    TestimonialComponent,
    VaerticalComponent,
    JuridiqueComponent,
    FiscalComponent,
    ListArticleComponent,
    GlobaleComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
