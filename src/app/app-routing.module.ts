import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanceComponent } from './avance/avance.component';
// import { FactsComponent } from './home/facts/facts.component';
import { FiscalComponent } from './fiscal/fiscal.component';
import { FooterComponent } from './footer/footer.component';
import { GlobaleComponent } from './globale/globale.component';
import { HomeComponent } from './home/home.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { JuridiqueComponent } from './juridique/juridique.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { SocialeComponent } from './sociale/sociale.component';
  import { TopbarComponent } from './topbar/topbar.component';
import { VaerticalComponent } from './vaertical/vaertical.component';

const routes: Routes = [
  // {path:"footer",component:FooterComponent},
  {path:"",component:HomeComponent},
  // {path:"navbar",component:NavbarComponent},
  {path:"service",component:ServiceComponent},
  {path:"login",component:LoginComponent},
  {path:"avance",component:AvanceComponent},
  {path:"topbar",component:TopbarComponent},
  // {path:"facts",component:FactsComponent},
  {path:"sociale",component:SocialeComponent},
  {path:"vaertical",component:VaerticalComponent},
  {path:"juridique",component:JuridiqueComponent},
  {path:"fiscal",component:FiscalComponent},
  {path:"list-article",component:ListArticleComponent},
  {path:"globale",component:GlobaleComponent},
  {path:"inscription",component:InscritComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
