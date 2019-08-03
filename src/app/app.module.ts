import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EleveComponent } from './eleve/eleve.component';
import { NouveauEleveComponent } from './nouveau-eleve/nouveau-eleve.component';
import { EditEleveComponent } from './edit-eleve/edit-eleve.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EleveService} from '../services/eleve.service';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes = [

  {path:'eleve', component:EleveComponent},
  {path:'editEleve/:id', component:EditEleveComponent},
  {path:'nouveau-eleve', component:NouveauEleveComponent},
  {path:'', redirectTo:'/eleve', pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    EleveComponent,
    NouveauEleveComponent,
    EditEleveComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule
  ],
  providers: [EleveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
