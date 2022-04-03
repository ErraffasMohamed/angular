import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEtudiantComponent } from './components/form-etudiant/form-etudiant.component';
import { FormOptionComponent } from './components/form-option/form-option.component';
import { ListOptionComponent } from './components/list-option/list-option.component';
import { ListEtudiantComponent } from './components/list-etudiant/list-etudiant.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { OptionComponent } from './components/option/option.component';
import { NavComponent } from './components/nav/nav.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FormEtudiantComponent,
    FormOptionComponent,
    ListOptionComponent,
    ListEtudiantComponent,
    HomeComponent,
    EtudiantComponent,
    OptionComponent,
    NavComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'etudiant', component: EtudiantComponent },
      { path: 'option', component: OptionComponent },
      { path: '', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
